import os
import re
import time
from pathlib import Path
from collections import defaultdict, deque

import requests
from dotenv import load_dotenv
from flask import Flask, jsonify, request

BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env")

app = Flask(__name__)

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "").strip()
GEMINI_MODEL = os.getenv("GEMINI_MODEL", "gemini-2.5-flash").strip()
PORT = int(os.getenv("PORT", "8787"))
REQUEST_TIMEOUT_SECONDS = float(os.getenv("REQUEST_TIMEOUT_SECONDS", "20"))
MAX_MESSAGE_CHARS = int(os.getenv("MAX_MESSAGE_CHARS", "300"))
MAX_PROMPT_CHARS = int(os.getenv("MAX_PROMPT_CHARS", "12000"))
MAX_REQUEST_BYTES = int(os.getenv("MAX_REQUEST_BYTES", "65536"))
RATE_LIMIT_MAX_REQUESTS = int(os.getenv("RATE_LIMIT_MAX_REQUESTS", "20"))
RATE_LIMIT_WINDOW_SECONDS = int(os.getenv("RATE_LIMIT_WINDOW_SECONDS", "60"))
REQUIRED_X_REQUESTED_WITH = os.getenv("REQUIRED_X_REQUESTED_WITH", "EatWiseChatClient").strip()
ALLOWED_ORIGINS = [
    origin.strip()
    for origin in os.getenv(
        "ALLOWED_ORIGINS",
        "http://localhost:8000,http://127.0.0.1:8000,http://localhost:5500,http://127.0.0.1:5500",
    ).split(",")
    if origin.strip()
]

app.config["MAX_CONTENT_LENGTH"] = MAX_REQUEST_BYTES

_request_windows = defaultdict(deque)


def sanitize_text(value: str) -> str:
    value = re.sub(r"[\x00-\x1f\x7f]", " ", value or "")
    value = re.sub(r"\s+", " ", value)
    return value.strip()


def extract_reply_text(data: dict) -> str:
    try:
        return data["candidates"][0]["content"]["parts"][0]["text"]
    except (KeyError, IndexError, TypeError):
        return ""


def get_client_ip() -> str:
    forwarded_for = request.headers.get("X-Forwarded-For", "")
    if forwarded_for:
        return forwarded_for.split(",")[0].strip()
    return request.remote_addr or "unknown"


def is_rate_limited(client_ip: str) -> bool:
    now = time.time()
    bucket = _request_windows[client_ip]

    while bucket and now - bucket[0] > RATE_LIMIT_WINDOW_SECONDS:
        bucket.popleft()

    if len(bucket) >= RATE_LIMIT_MAX_REQUESTS:
        return True

    bucket.append(now)
    return False


def cors_origin_for_request() -> str:
    origin = request.headers.get("Origin", "")
    if origin in ALLOWED_ORIGINS:
        return origin
    if origin == "null" and "null" in ALLOWED_ORIGINS:
        return "null"
    return ""


def corsify_response(response):
    allow_origin = cors_origin_for_request()
    if allow_origin:
        response.headers["Access-Control-Allow-Origin"] = allow_origin
        response.headers["Access-Control-Allow-Methods"] = "POST, OPTIONS"
        response.headers["Access-Control-Allow-Headers"] = "Content-Type, X-Requested-With"
        response.headers["Vary"] = "Origin"
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["Referrer-Policy"] = "no-referrer"
    response.headers["Cache-Control"] = "no-store"
    return response


def is_origin_allowed() -> bool:
    return bool(cors_origin_for_request())


@app.after_request
def apply_cors_headers(response):
    return corsify_response(response)


@app.get("/api/health")
def healthcheck():
    return jsonify({"ok": True, "model": GEMINI_MODEL, "geminiConfigured": bool(GEMINI_API_KEY)})


@app.route("/api/chat", methods=["POST", "OPTIONS"])
def chat():
    if request.method == "OPTIONS":
        if not is_origin_allowed():
            return jsonify({"error": "Origin not allowed"}), 403
        return ("", 204)

    if not is_origin_allowed():
        return jsonify({"error": "Origin not allowed"}), 403

    if request.headers.get("X-Requested-With", "") != REQUIRED_X_REQUESTED_WITH:
        return jsonify({"error": "Invalid client signature"}), 403

    if request.mimetype != "application/json":
        return jsonify({"error": "Unsupported content type"}), 415

    if not GEMINI_API_KEY:
        return jsonify({"error": "Server misconfigured"}), 503

    client_ip = get_client_ip()
    if is_rate_limited(client_ip):
        return jsonify({"error": "Rate limit exceeded"}), 429

    payload = request.get_json(silent=True) or {}
    prompt = sanitize_text(str(payload.get("prompt", "")))
    message = sanitize_text(str(payload.get("message", "")))

    if not prompt:
        return jsonify({"error": "Missing prompt"}), 400

    if message and len(message) > MAX_MESSAGE_CHARS:
        return jsonify({"error": f"Message too long (max {MAX_MESSAGE_CHARS})"}), 400

    if len(prompt) > MAX_PROMPT_CHARS:
        return jsonify({"error": f"Prompt too long (max {MAX_PROMPT_CHARS})"}), 400

    gemini_url = f"https://generativelanguage.googleapis.com/v1beta/models/{GEMINI_MODEL}:generateContent"
    try:
        upstream = requests.post(
            gemini_url,
            params={"key": GEMINI_API_KEY},
            headers={"Content-Type": "application/json"},
            json={"contents": [{"parts": [{"text": prompt}]}]},
            timeout=REQUEST_TIMEOUT_SECONDS,
        )
    except requests.RequestException:
        return jsonify({"error": "Upstream unavailable"}), 502

    if not upstream.ok:
        return jsonify({"error": "Upstream rejected request"}), 502

    data = upstream.json()
    reply = sanitize_text(extract_reply_text(data))
    if not reply:
        return jsonify({"error": "Empty upstream response"}), 502

    return jsonify({"reply": reply})


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=PORT)
