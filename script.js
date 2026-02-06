// --- Data Standard (No Images, Text Only) ---
const menuData = [
  // --- Veg ---
  {
    id: "m1",
    name: "PIZZA MARGHERITA",
    category: "Veg",
    price: 220,
    description: "CLASSIC. TOMATO. MOZZARELLA. BASIL."
  },
  {
    id: "m2",
    name: "ALFREDO PASTA",
    category: "Veg",
    price: 260,
    description: "CREAMY. GARLIC. PARMESAN."
  },
  {
    id: "m3",
    name: "MEGA BURGER",
    category: "Veg",
    price: 180,
    description: "VEGGIE PATTY. LETTUCE. BIG BUN."
  },
  {
    id: "m4",
    name: "DAL MAKHANI",
    category: "Veg",
    price: 240,
    description: "BLACK LENTIL. BUTTER. RICH."
  },
  {
    id: "m5",
    name: "MASALA DOSA",
    category: "Veg",
    price: 150,
    description: "CRISPY CREPE. SPICED POTATO."
  },
  {
    id: "m6",
    name: "GRILLED SANDWICH",
    category: "Veg",
    price: 130,
    description: "TOASTED. CHEESE. VEGGIES."
  },
  // --- Non-Veg ---
  {
    id: "m7",
    name: "PEPPERONI PIZZA",
    category: "Non-Veg",
    price: 350,
    description: "SPICY PEPPERONI. CHEESE. HOT."
  },
  {
    id: "m8",
    name: "CHICKEN WINGS",
    category: "Non-Veg",
    price: 280,
    description: "BBQ SAUCE. CRISPY. 6 PIECES."
  },
  {
    id: "m9",
    name: "GRILLED FISH",
    category: "Non-Veg",
    price: 420,
    description: "LEMON BUTTER. HERBS. FRESH."
  },
  {
    id: "m10",
    name: "CHICKEN BURGER",
    category: "Non-Veg",
    price: 250,
    description: "GRILLED BREAST. SPICY MAYO."
  }
];

// --- State ---
const state = {
  plate: [],
  searchTerm: '',
  category: 'all',
  specials: [] // Store specials here
};

// --- DOM ---
const els = {
  grid: document.getElementById('menuGrid'),
  cartPanel: document.getElementById('cartPanel'),
  cartList: document.getElementById('cartList'),
  cartTotal: document.getElementById('cartTotal'),
  cartCount: document.getElementById('cartCount'),

  filters: document.getElementById('categoryFilters'),
  search: document.getElementById('searchInput'),

  dockCart: document.getElementById('dockCart'),
  dockMenu: document.getElementById('dockMenu'),
  dockChat: document.getElementById('dockChat'),

  toast: document.getElementById('toast'),

  chatOverlay: document.getElementById('chatOverlay'),
  chatStart: document.getElementById('dockChat'),
  chatClose: document.getElementById('closeChat'),
  chatInput: document.getElementById('chatInput'),
  chatMsgs: document.getElementById('chatMessages')
};

// --- Init ---
function init() {
  renderSpecials();
  renderMenu();
  renderFilters();
  // Preloader
  initPreloader();
}

function initPreloader() {
  const bar = document.getElementById('loaderBar');
  const logs = document.getElementById('loaderLogs');
  const counter = document.getElementById('loaderCounter');
  const preloader = document.getElementById('preloader');

  const messages = [
    "> INITIALIZING KERNEL...",
    "> LOADING ASSETS [TEXTURES]...",
    "> CONNECTING TO MAINNET...",
    "> DECRYPTING MENU DATA...",
    "> SYSTEM READY."
  ];

  let progress = 0.00;
  let msgIndex = 0;

  // High-precision ticker
  const update = () => {
    // Variable speed for realism
    progress += Math.random() * 1.5;

    if (progress >= 100.00) {
      progress = 100.00;
      counter.textContent = "100.00%";
      bar.style.width = "100%";
      logs.textContent = messages[4];

      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 800);
      return;
    }

    counter.textContent = progress.toFixed(2) + "%";
    bar.style.width = `${progress}%`;

    // Log logic based on thresholds
    if (progress > 20 && msgIndex === 0) { logs.textContent = messages[0]; msgIndex++; }
    if (progress > 40 && msgIndex === 1) { logs.textContent = messages[1]; msgIndex++; }
    if (progress > 60 && msgIndex === 2) { logs.textContent = messages[2]; msgIndex++; }
    if (progress > 80 && msgIndex === 3) { logs.textContent = messages[3]; msgIndex++; }

    requestAnimationFrame(update);
  };

  requestAnimationFrame(update);
}

function renderSpecials() {
  els.search.oninput = (e) => {
    state.searchTerm = e.target.value;
    renderMenu();
  };

  els.filters.onclick = (e) => {
    if (e.target.dataset.cat) {
      state.category = e.target.dataset.cat;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      renderMenu();
    }
  };

  els.dockCart.onclick = toggleCartMobile;

  // Theme Toggle
  document.getElementById('dockTheme').onclick = () => {
    document.body.classList.toggle('void-mode');
    showToast(document.body.classList.contains('void-mode') ? 'VOID MODE ACTIVATED ☾' : 'LIGHT MODE RESTORED ☀');
  };

  // Chat
  setupChat();
}

function renderSpecials() {
  // Only generate once if empty
  if (state.specials.length === 0) {
    state.specials = [...menuData].sort(() => 0.5 - Math.random()).slice(0, 2);
  }
  const specials = state.specials;

  const container = document.getElementById('dailySpecials');
  container.innerHTML = `
    <div class="specials-banner">
      <h2 class="specials-title">★ CHEF'S SELECTION</h2>
      <div class="specials-grid">
        ${specials.map(d => `
          <div class="special-card">
            <div style="display:flex; justify-content:space-between; align-items:start;">
              <h3 class="special-name">${d.name}</h3>
              <span class="special-price">₹${d.price}</span>
            </div>
            <p class="special-desc">${d.description}</p>
            <button onclick="addToCart('${d.id}')" class="special-add-btn">
              ADD TO ORDER +
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// --- Render (TEXT ONLY MODE) ---
function renderMenu() {
  const filtered = menuData.filter(d => {
    return (state.category === 'all' || d.category === state.category) &&
      d.name.toLowerCase().includes(state.searchTerm.toLowerCase());
  });

  // New "Text-Card" Design
  els.grid.innerHTML = filtered.map(d => `
    <div class="brut-card" style="min-height: 220px; display: flex; flex-direction: column; justify-content: space-between;">
      <div style="padding: 24px; flex: 1;">
         <div style="display:flex; justify-content:space-between; margin-bottom:12px; align-items:flex-start;">
            <h3 class="card-title" style="font-size:32px; line-height:0.9; margin:0; word-break:break-word;">${d.name}</h3>
            <div class="price-tag" style="font-size:24px;">₹${d.price}</div>
         </div>
         
         <div class="card-badges" style="margin-bottom:24px;">
            <span class="badge" style="background:var(--ink); color:var(--bg-paper);">${d.category.toUpperCase()}</span>
         </div>
         
         <p style="font-family:'Space Grotesk'; font-size:16px; font-weight:500; opacity:0.8; text-transform:uppercase;">${d.description}</p>
      </div>
      
      <button class="add-btn" onclick="addToCart('${d.id}')" style="width:100%; height:60px; font-size:18px; font-weight:800; display:flex; align-items:center; justify-content:center; gap:8px;">
        ADD DIRECTLY <span>+</span>
      </button>
    </div>
  `).join('');
}

function renderFilters() {
  const cats = ['all', ...new Set(menuData.map(d => d.category))];
  els.filters.innerHTML = cats.map(c => `
    <button class="filter-btn ${state.category === c ? 'active' : ''}" data-cat="${c}">${c}</button>
  `).join('');
}

// --- Logic ---
window.addToCart = (id) => {
  const item = menuData.find(d => d.id === id);
  state.plate.push(item);
  renderCart();
  showToast(`ADDED: ${item.name}`);
};

function renderCart() {
  const total = state.plate.reduce((sum, i) => sum + i.price, 0);
  els.cartTotal.textContent = `₹${total}`;
  els.cartCount.textContent = state.plate.length;

  if (state.plate.length === 0) {
    els.cartList.innerHTML = `<div class="text-center" style="opacity:0.5; margin-top:40px; font-weight:bold; font-size:24px;">TICKET EMPTY<br>ADD ITEMS</div>`;
    return;
  }

  els.cartList.innerHTML = state.plate.map((item, idx) => `
    <div class="line-item" style="border-bottom:1px solid #ddd; padding-bottom:8px; margin-bottom:12px;">
      <span style="font-weight:700;">${item.name}</span>
      <span>₹${item.price} <button onclick="removeItem(${idx})" style="background:none; border:none; color:red; font-weight:900; cursor:pointer; margin-left:8px;">X</button></span>
    </div>
  `).join('');
}

window.removeItem = (idx) => {
  state.plate.splice(idx, 1);
  renderCart();
};

function toggleCartMobile() {
  if (window.innerWidth <= 900) {
    els.cartPanel.classList.toggle('open');
  }
}

function showToast(msg) {
  els.toast.textContent = msg;
  els.toast.style.display = 'block';
  setTimeout(() => els.toast.style.display = 'none', 2000);
}

// --- Checkout & Payment V2 (Terminal) ---
const paymentModal = document.getElementById('paymentModal');
const termUI = {
  form: document.getElementById('paymentFormUI'),
  log: document.getElementById('paymentLogUI'),
  logList: document.getElementById('terminalLogList'),
  cardNum: document.getElementById('cardNumInput'),
  cardExp: document.getElementById('cardExpInput'),
  cardCvv: document.getElementById('cardCvvInput'),
  dispNum: document.getElementById('cardNumDisp'),
  dispExp: document.getElementById('cardExpDisp'),
  opts: document.querySelectorAll('.pay-opt-btn'),
  close: document.getElementById('closePayment')
};

document.getElementById('checkoutBtn').onclick = () => {
  if (state.plate.length === 0) {
    showToast('PLATE IS EMPTY. ADD FOOD.');
    return;
  }
  // Reset UI
  termUI.form.classList.remove('hidden');
  termUI.log.classList.add('hidden');
  termUI.cardNum.value = '';
  termUI.cardExp.value = '';
  termUI.cardCvv.value = '';
  termUI.dispNum.textContent = '0000 0000 0000 0000';
  termUI.dispExp.textContent = 'MM/YY';
  paymentModal.style.display = 'flex';
};

termUI.close.onclick = () => {
  paymentModal.style.display = 'none';
};

// Input Formatting & Virtual Card Update
termUI.cardNum.oninput = (e) => {
  let v = e.target.value.replace(/\D/g, '').substring(0, 16);
  // Add spaces
  let parts = [];
  for (let i = 0; i < v.length; i += 4) {
    parts.push(v.substring(i, i + 4));
  }
  e.target.value = parts.join(' ');
  termUI.dispNum.textContent = parts.length ? parts.join(' ') : '0000 0000 0000 0000';
};

termUI.cardExp.oninput = (e) => {
  let v = e.target.value.replace(/\D/g, '').substring(0, 4);
  if (v.length >= 2) {
    e.target.value = v.substring(0, 2) + '/' + v.substring(2);
  } else {
    e.target.value = v;
  }
  termUI.dispExp.textContent = e.target.value || 'MM/YY';
};

// Quick Pay Options
termUI.opts.forEach(btn => {
  btn.onclick = () => {
    termUI.opts.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  };
});

document.getElementById('confirmPayBtn').onclick = () => {
  // Start Terminal Sequence
  const method = document.querySelector('.pay-opt-btn.active').dataset.method.toUpperCase();
  termUI.form.classList.add('hidden');
  termUI.log.classList.remove('hidden');
  termUI.logList.innerHTML = '';

  const logs = [
    `> INITIALIZING SECURE LINK...`,
    `> HANDSHAKE ESTABLISHED (TLS 1.3)`,
    `> VERIFYING ${method} CREDENTIALS...`,
    `> ENCRYPTING PACKET [################]`,
    `> CONNECTING TO BANK GATEWAY...`,
    `> AUTHORIZING TRANSACTION...`,
    `> PAYMENT APPROVED.`
  ];

  let delay = 0;
  logs.forEach((line, i) => {
    delay += Math.floor(Math.random() * 400) + 200;
    setTimeout(() => {
      termUI.logList.innerHTML += `<div class="log-line">${line}</div>`;
      // Final step
      if (i === logs.length - 1) {
        finishPayment();
      }
    }, delay);
  });
};

function finishPayment() {
  setTimeout(() => {
    paymentModal.style.display = 'none';
    const paper = document.querySelector('.receipt-paper');
    paper.classList.add('printing');
    showToast('TRANSACTION COMPLETE. PRINTING RECEIPT 🖨️');

    setTimeout(() => {
      state.plate = [];
      renderCart();

      // Reset App State to "Main Menu"
      state.searchTerm = '';
      state.category = 'all';
      els.search.value = '';
      renderMenu();
      renderFilters();
      document.querySelector('.main-feed').scrollTop = 0;

      paper.classList.remove('printing');
      paper.classList.add('hidden');

      setTimeout(() => {
        paper.classList.remove('hidden');
        paper.classList.add('new');
        setTimeout(() => paper.classList.remove('new'), 600);
      }, 100);

      document.getElementById('orderId').textContent = Math.floor(Math.random() * 9000) + 1000;
      document.getElementById('currentDate').textContent = new Date().toLocaleDateString();
    }, 1000);
  }, 1000);
}

// --- Chatbot Integration ---
function setupChat() {
  const GEMINI_API_KEY = "AIzaSyDhVpaS93W9wfFDgcczNic4rX5vzdelUEo";
  // User requested 2.5 Flash -> Explicitly setting gemini-2.5-flash
  const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
  console.log("AI Model: Gemini 2.5 Flash");

  els.chatStart.onclick = () => els.chatOverlay.classList.remove('hidden');
  els.chatClose.onclick = () => els.chatOverlay.classList.add('hidden');

  async function sendMessage() {
    const text = els.chatInput.value.trim();
    if (!text) return;

    // User Message
    els.chatMsgs.innerHTML += `<div style="margin-bottom:8px;">> USER: ${text.toUpperCase()}</div>`;
    els.chatInput.value = '';
    els.chatMsgs.scrollTop = els.chatMsgs.scrollHeight;

    // Bot Processing
    const processingId = 'proc-' + Date.now();
    els.chatMsgs.innerHTML += `<div id="${processingId}" style="margin-bottom:8px;">> SYSTEM: PROCESSING...</div>`;
    els.chatMsgs.scrollTop = els.chatMsgs.scrollHeight;

    try {
      // Create context
      const menuContext = menuData.map(d => `${d.name} (${d.category}, ₹${d.price}, ID:${d.id}): ${d.description}`).join("\n");
      const specialsContext = state.specials.map(d => `${d.name} (ID:${d.id})`).join(", ");

      const systemPrompt = `SYSTEM_ROLE: YOU ARE A ROBOTIC WAITER 'AI-WAITER-9000'.
STYLE: RAW, BRUTALIST, ALL CAPS, CONCISE. NO EMOJIS.
DATA:
${menuContext}

TODAY'S SPECIALS: ${specialsContext}

TASK: ANSWER CUSTOMER QUERY and TAKE ORDERS.
IMPORTANT:
1. IF USER WANTS TO ORDER, RESPOND WITH FORMAT: "CMD:ORDER|{ID} || {YOUR_MESSAGE}".
   EXAMPLE: USER "I want the pizza" -> RESPONSE: "CMD:ORDER|m1 || ADDING PIZZA MARGHERITA TO TICKET."
2. IF NO ORDER, JUST RESPOND NORMALLY.
3. RECOMMEND TODAY'S SPECIALS IF ASKED.

USER QUERY: ${text}`;

      const response = await fetch(GEMINI_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: systemPrompt }] }]
        })
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      let reply = data.candidates[0].content.parts[0].text;

      // Check for commands
      if (reply.includes("CMD:ORDER|")) {
        const parts = reply.split("||");
        const cmdPart = parts[0].trim(); // CMD:ORDER|m1
        const msgPart = parts[1] ? parts[1].trim() : "ORDER CONFIRMED.";

        const itemId = cmdPart.split("|")[1];
        if (itemId) {
          window.addToCart(itemId);
        }
        reply = msgPart;
      }

      // Update UI
      document.getElementById(processingId).innerHTML = `> AI: ${reply.toUpperCase()}`;
    } catch (e) {
      console.error(e);
      document.getElementById(processingId).innerHTML = `> AI: ERROR. ${e.message ? e.message.toUpperCase() : 'OFFLINE'}`;
    }
  }

  els.chatInput.onkeydown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };
}

init();
