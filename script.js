// --- Data Standard (No Images, Text Only) ---
const menuData = [
  // --- Veg ---
  {
    id: "m1",
    name: "PIZZA MARGHERITA",
    category: "Veg",
    price: 240,
    description: "CLASSIC TOMATO. MILK MOZZARELLA. BASIL OIL.",
    tags: ["CHEESE", "BASIL"],
    calories: 620,
    time: 12,
    image: "images/pizza-margherita.jpg"
  },
  {
    id: "m2",
    name: "ALFREDO PASTA",
    category: "Veg",
    price: 280,
    description: "CREAMY GARLIC. PARMESAN SHARDS. CRACKED PEPPER.",
    tags: ["CREAMY", "GARLIC"],
    calories: 720,
    time: 14,
    image: "images/alfredo-pasta.jpg"
  },
  {
    id: "m3",
    name: "SMOKED PANEER TIKKA",
    category: "Veg",
    price: 260,
    description: "CHARRED PANEER. SPICE DUST. LIME.",
    tags: ["SMOKED", "SPICY"],
    calories: 540,
    time: 10,
    image: "images/paneer-tikka.jpg"
  },
  {
    id: "m4",
    name: "TRUFFLE MUSHROOM TOAST",
    category: "Veg",
    price: 220,
    description: "CRISP SOURDOUGH. BLACK TRUFFLE. HERB BUTTER.",
    tags: ["TRUFFLE", "CRISP"],
    calories: 460,
    time: 8,
    image: "images/mushroom-truffle-toast.jpg"
  },
  {
    id: "m5",
    name: "MASALA DOSA",
    category: "Veg",
    price: 160,
    description: "CRISPY CREPE. SPICED POTATO. CHUTNEY.",
    tags: ["CRISP", "SOUTH"],
    calories: 430,
    time: 9,
    image: "images/masala-dosa.jpg"
  },
  {
    id: "m6",
    name: "GRILLED VEG SANDWICH",
    category: "Veg",
    price: 150,
    description: "TOASTED BREAD. MELTED CHEESE. CRUNCH.",
    tags: ["TOASTED", "MELT"],
    calories: 410,
    time: 7,
    image: "images/veg-grilled-sandwich.jpg"
  },
  // --- Non-Veg ---
  {
    id: "m7",
    name: "PEPPERONI PIZZA",
    category: "Non-Veg",
    price: 380,
    description: "SPICY PEPPERONI. DOUBLE CHEESE. HOT.",
    tags: ["SPICY", "CHEESE"],
    calories: 780,
    time: 13,
    image: "images/pepperoni-pizza.jpg"
  },
  {
    id: "m8",
    name: "CHICKEN WINGS",
    category: "Non-Veg",
    price: 300,
    description: "BBQ GLAZE. CRISPY SKIN. 6 PIECES.",
    tags: ["BBQ", "CRISP"],
    calories: 690,
    time: 11,
    image: "images/chicken-wings.jpg"
  },
  {
    id: "m9",
    name: "GRILLED FISH",
    category: "Non-Veg",
    price: 440,
    description: "LEMON BUTTER. HERB RUB. FRESH CUT.",
    tags: ["HERB", "LIGHT"],
    calories: 520,
    time: 12,
    image: "images/grilled-fish.jpg"
  },
  {
    id: "m10",
    name: "CHICKEN BURGER",
    category: "Non-Veg",
    price: 260,
    description: "GRILLED BREAST. SPICY MAYO. PICKLES.",
    tags: ["GRILLED", "SPICY"],
    calories: 640,
    time: 10,
    image: "images/chicken-burger.jpg"
  },
  {
    id: "m11",
    name: "BUTTER CHICKEN",
    category: "Non-Veg",
    price: 360,
    description: "CREAMY TOMATO. CHARRED CHICKEN. NAAN DIP.",
    tags: ["CREAMY", "RICH"],
    calories: 760,
    time: 14,
    image: "images/butter-chicken.jpg"
  },
  {
    id: "m12",
    name: "SPICY LAMB KEBABS",
    category: "Non-Veg",
    price: 420,
    description: "SMOKE KISS. MINT DRIZZLE. RED HEAT.",
    tags: ["SMOKED", "SPICY"],
    calories: 680,
    time: 12,
    image: "images/lamb-kebabs.jpg"
  },
  // --- Vegan ---
  {
    id: "m13",
    name: "CHILI TOFU BOWL",
    category: "Vegan",
    price: 240,
    description: "CRISPY TOFU. GARLIC CHILI. RICE.",
    tags: ["VEGAN", "SPICY"],
    calories: 520,
    time: 10,
    image: "images/tofu-bowl.jpg"
  },
  {
    id: "m14",
    name: "JACKFRUIT TACOS",
    category: "Vegan",
    price: 260,
    description: "PULLED JACKFRUIT. PICKLED ONION. LIME.",
    tags: ["VEGAN", "TANG"],
    calories: 480,
    time: 9,
    image: "images/jackfruit-tacos.jpg"
  },
  {
    id: "m15",
    name: "AVOCADO LIME SALAD",
    category: "Vegan",
    price: 200,
    description: "CRISP GREENS. LIME VINAIGRETTE. SEEDS.",
    tags: ["FRESH", "LIGHT"],
    calories: 360,
    time: 6,
    image: "images/avocado-salad.jpg"
  },
  // --- Bowls ---
  {
    id: "m16",
    name: "POWER GRAIN BOWL",
    category: "Bowls",
    price: 280,
    description: "QUINOA. ROASTED VEG. CITRUS DRESSING.",
    tags: ["FIBER", "FRESH"],
    calories: 540,
    time: 9,
    image: "images/power-grain-bowl.jpg"
  },
  {
    id: "m17",
    name: "TERIYAKI CHICKEN BOWL",
    category: "Bowls",
    price: 320,
    description: "GLAZED CHICKEN. SESAME RICE. SLAW.",
    tags: ["SWEET", "SAVORY"],
    calories: 690,
    time: 11,
    image: "images/teriyaki-chicken-bowl.jpg"
  },
  // --- Protein ---
  {
    id: "m18",
    name: "STEAK PLATE",
    category: "Protein",
    price: 520,
    description: "SEARED STEAK. GARLIC BUTTER. GREENS.",
    tags: ["HIGH PROTEIN", "SEARED"],
    calories: 840,
    time: 14,
    image: "images/steak-plate.jpg"
  },
  {
    id: "m19",
    name: "SALMON PLATE",
    category: "Protein",
    price: 480,
    description: "CRISP SKIN SALMON. LEMON. HERBS.",
    tags: ["OMEGA", "LIGHT"],
    calories: 620,
    time: 12,
    image: "images/salmon-plate.jpg"
  },
  {
    id: "m20",
    name: "PROTEIN OMELET",
    category: "Protein",
    price: 220,
    description: "EGG WHITES. SPINACH. FETA.",
    tags: ["LEAN", "FAST"],
    calories: 380,
    time: 7,
    image: "images/protein-omelet.jpg"
  },
  // --- Drinks ---
  {
    id: "m21",
    name: "COLD BREW TONIC",
    category: "Drinks",
    price: 140,
    description: "NITRO COLD BREW. CITRUS TWIST. BUBBLES.",
    tags: ["CAFFEINE", "FRESH"],
    calories: 120,
    time: 3,
    image: "images/cold-brew-tonic.jpg"
  },
  {
    id: "m22",
    name: "MINT LIME SPARK",
    category: "Drinks",
    price: 120,
    description: "MINT. LIME. SPARKLING ICE.",
    tags: ["COOL", "LIGHT"],
    calories: 90,
    time: 3,
    image: "images/mint-lime-spark.jpg"
  },
  // --- Dessert ---
  {
    id: "m23",
    name: "BROWNIE SLAB",
    category: "Dessert",
    price: 180,
    description: "DARK COCOA. SEA SALT. FUDGE CORE.",
    tags: ["RICH", "DARK"],
    calories: 520,
    time: 5,
    image: "images/brownie-slab.jpg"
  },
  {
    id: "m24",
    name: "BERRY YOGURT CUP",
    category: "Dessert",
    price: 150,
    description: "GREEK YOGURT. MIXED BERRIES. HONEY.",
    tags: ["LIGHT", "FRESH"],
    calories: 320,
    time: 4,
    image: "images/berry-yogurt-cup.jpg"
  },
  // --- Sides ---
  {
    id: "m25",
    name: "TRUFFLE FRIES",
    category: "Sides",
    price: 160,
    description: "CRISPY POTATO. TRUFFLE SALT. PARM.",
    tags: ["CRISP", "SALT"],
    calories: 440,
    time: 6,
    image: "images/truffle-fries.jpg"
  },
  {
    id: "m26",
    name: "CRUNCH SLAW",
    category: "Sides",
    price: 120,
    description: "CABBAGE. CARROT. CITRUS BITE.",
    tags: ["CRUNCH", "TANG"],
    calories: 180,
    time: 4,
    image: "images/crunch-slaw.jpg"
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
  document.getElementById('currentDate').textContent = new Date().toLocaleDateString();

  document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.onclick = () => {
      const target = document.querySelector(btn.dataset.scroll);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  });

  // Listeners
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
  
  const closeCartBtn = document.getElementById('closeCartMobile');
  if (closeCartBtn) {
    closeCartBtn.onclick = () => {
      els.cartPanel.classList.remove('open');
    };
  }
  
  document.getElementById('openChatBtn').onclick = () => {
    els.chatOverlay.classList.remove('hidden');
    if (!els.chatInput.disabled) {
      els.chatInput.focus();
    }
  };

  document.getElementById('updatesForm').onsubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('updatesEmail');
    if (!email.value.trim()) return;
    showToast('/// EMAIL REGISTERED /// WATCH FOR DROPS ///');
    email.value = '';
  };

  // Theme Toggle
  document.getElementById('dockTheme').onclick = () => {
    document.body.classList.toggle('void-mode');
    showToast(document.body.classList.contains('void-mode') ? '/// VOID MODE ACTIVATED ///' : '/// LIGHT MODE ACTIVATED ///');
  };

  // Chat
  setupChat();
}

function renderSpecials() {
  // Only generate once if empty
  if (state.specials.length === 0) {
    // Tier-based selection: pick 1 premium high-price, 1 category diverse
    const premium = menuData.filter(d => d.price >= 420).sort(() => 0.5 - Math.random())[0];
    const categoryPool = menuData.filter(d => d.category !== premium.category);
    const diverse = categoryPool.sort(() => 0.5 - Math.random())[0];
    state.specials = [premium, diverse].filter(Boolean);
    if (state.specials.length < 2) {
      // Fallback if not enough items
      state.specials = [...menuData].sort(() => 0.5 - Math.random()).slice(0, 2);
    }
  }
  const specials = state.specials;

  const container = document.getElementById('dailySpecials');
  container.innerHTML = `
    <div class="specials-banner">
      <h2 class="specials-title">★ CHEF'S SELECTION</h2>
      <div class="specials-grid">
        ${specials.map(d => `
          <div class="special-card">
            <div class="special-img" style="background-image:url('${d.image}'); background-size:cover; background-position:center; height:180px; border-bottom:2px solid black; margin:-16px -16px 12px -16px;"></div>
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
  const term = state.searchTerm.toLowerCase().trim();
  const filtered = menuData.filter(d => {
    const inCategory = state.category === 'all' || d.category === state.category;
    if (!inCategory) return false;
    if (!term) return true;
    const haystack = `${d.name} ${d.description} ${(d.tags || []).join(' ')}`.toLowerCase();
    return haystack.includes(term);
  });

  const countEl = document.getElementById('resultCount');
  if (countEl) countEl.textContent = `${filtered.length} ITEMS`;

  if (filtered.length === 0) {
    els.grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-title">NO MATCHES</div>
        <div class="empty-desc">TRY A DIFFERENT SEARCH OR CLEAR FILTERS.</div>
      </div>
    `;
    return;
  }

  // New "Text-Card" Design with Images
  els.grid.innerHTML = filtered.map(d => `
    <div class="brut-card menu-card" style="display: flex; flex-direction: column; justify-content: space-between; overflow:hidden;">
      <div class="card-img-container">
        <img src="${d.image}" alt="${d.name}" class="card-img" onerror="this.style.display='none'">
      </div>
      <div class="card-content">
         <div class="card-top">
            <h3 class="card-title" style="font-size:32px; line-height:0.9; margin:0; word-break:break-word;">${d.name}</h3>
            <div class="price-tag" style="font-size:24px;">₹${d.price}</div>
         </div>

         <div class="card-meta">
            <span class="badge" style="background:var(--ink); color:var(--bg-paper);">${d.category.toUpperCase()}</span>
            <span class="meta-pill">${d.calories} CAL</span>
            <span class="meta-pill">${d.time} MIN</span>
            ${(d.tags || []).slice(0, 2).map(t => `<span class="meta-pill">${t}</span>`).join('')}
         </div>

         <p class="card-desc">${d.description}</p>
      </div>

      <button class="add-btn add-btn-full" onclick="addToCart('${d.id}')">
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
  showToast(`/// ADDED: ${item.name} ///`);
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
    showToast('/// PLATE EMPTY /// ADD ITEMS ///');
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
    `/// CONNECTING`,
    `/// PROCESSING ${method}`,
    `/// APPROVED ///`
  ];

  let delay = 0;
  logs.forEach((line, i) => {
    delay += 650;
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
    showToast('/// PAYMENT COMPLETE /// PRINTING TICKET ///');

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
  const GEMINI_API_KEY = (window.EATWISE_CONFIG && window.EATWISE_CONFIG.GEMINI_API_KEY) || '';
  // User requested 2.5 Flash -> Explicitly setting gemini-2.5-flash
  const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
  console.log("AI Model: Gemini 2.5 Flash");

  els.chatStart.onclick = () => els.chatOverlay.classList.remove('hidden');
  els.chatClose.onclick = () => els.chatOverlay.classList.add('hidden');

  if (!GEMINI_API_KEY) {
    els.chatInput.placeholder = 'CHAT OFFLINE. ADD API KEY.';
    els.chatInput.disabled = true;
    return;
  }

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

// --- Opening Typography Scene Trigger ---
function hideIntroScene() {
  const scene = document.getElementById('intro-scene');
  if (!scene) return;
  scene.classList.add('lift-curtain');
  scene.style.pointerEvents = 'none';
  setTimeout(() => {
    scene.style.display = 'none';
  }, 1300);
}

window.addEventListener('load', () => {
  // 1. Reveal Text
  setTimeout(() => {
    const scene = document.getElementById('intro-scene');
    if (scene) {
      scene.classList.add('is-visible');
      scene.onclick = hideIntroScene;

      // 2. Lift Curtain after text animation (1.5s + 0.4s stagger + reading time)
      setTimeout(() => {
        hideIntroScene();
      }, 2500);
    }
  }, 300);

  // Failsafe: never let the intro block taps
  setTimeout(() => {
    hideIntroScene();
  }, 4500);
});

const skipIntroBtn = document.getElementById('skipIntro');
if (skipIntroBtn) {
  skipIntroBtn.onclick = () => {
    hideIntroScene();
  };
}

init();
