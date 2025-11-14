// Prebuilt menu with ingredients + extras
const menuData = [
  {
    id:"m1",
    name:"Margherita Pizza",
    category:"Veg",
    price:220,
    calories:320,
    description:"Classic pizza with tomatoes and cheese.",
    image:"https://source.unsplash.com/400x300/?pizza,margherita",

    ingredients:[
      "Cheese",
      "Tomato",
      "Basil",
      "Olive oil"
    ],

    extras:[
      {name:"Extra Cheese", price:40},
      {name:"Paneer Topping", price:50}
    ]
  },

  {
    id:"m2",
    name:"Pasta Alfredo",
    category:"Veg",
    price:260,
    calories:400,
    description:"Creamy Alfredo pasta with garlic.",
    image:"https://source.unsplash.com/400x300/?pasta,alfredo",

    ingredients:[
      "Cream",
      "Garlic",
      "Pepper",
      "Oregano"
    ],

    extras:[
      {name:"Add Mushrooms", price:30},
      {name:"Add Chicken", price:80}
    ]
  },
  
  {
    id:"m3",
    name:"Paneer Tikka",
    category:"Veg",
    price:280,
    calories:350,
    description:"Grilled cottage cheese with spices.",
    image:"https://source.unsplash.com/400x300/?paneer,tikka",

    ingredients:[
      "Paneer",
      "Yogurt",
      "Spices",
      "Bell Peppers"
    ],

    extras:[
      {name:"Extra Paneer", price:60},
      {name:"Mint Chutney", price:20}
    ]
  },
  
  {
    id:"m4",
    name:"Veg Burger",
    category:"Veg",
    price:180,
    calories:420,
    description:"Classic veggie burger with fries.",
    image:"https://source.unsplash.com/400x300/?burger,vegetarian",

    ingredients:[
      "Bun",
      "Veggie Patty",
      "Lettuce",
      "Tomato"
    ],

    extras:[
      {name:"Cheese Slice", price:30},
      {name:"Extra Patty", price:50}
    ]
  },
  
  {
    id:"m5",
    name:"Dal Makhani",
    category:"Veg",
    price:240,
    calories:380,
    description:"Creamy black lentils with butter and spices.",
    image:"https://source.unsplash.com/400x300/?dal,indian,lentils",

    ingredients:[
      "Black Lentils",
      "Butter",
      "Cream",
      "Spices"
    ],

    extras:[
      {name:"Extra Butter", price:20},
      {name:"Naan Bread", price:40}
    ]
  },
  
  {
    id:"m6",
    name:"Veg Biryani",
    category:"Veg",
    price:290,
    calories:450,
    description:"Aromatic basmati rice with mixed vegetables.",
    image:"https://source.unsplash.com/400x300/?biryani,rice",

    ingredients:[
      "Basmati Rice",
      "Mixed Vegetables",
      "Saffron",
      "Fried Onions"
    ],

    extras:[
      {name:"Raita", price:30},
      {name:"Extra Vegetables", price:40}
    ]
  },
  
  {
    id:"m7",
    name:"Masala Dosa",
    category:"Veg",
    price:150,
    calories:280,
    description:"Crispy rice crepe with spiced potato filling.",
    image:"https://source.unsplash.com/400x300/?dosa,south,indian",

    ingredients:[
      "Rice Batter",
      "Potato",
      "Onions",
      "Spices"
    ],

    extras:[
      {name:"Extra Chutney", price:15},
      {name:"Sambar", price:25}
    ]
  },
  
  {
    id:"m8",
    name:"Chole Bhature",
    category:"Veg",
    price:200,
    calories:520,
    description:"Spicy chickpeas with fluffy fried bread.",
    image:"https://source.unsplash.com/400x300/?chole,bhature,indian",

    ingredients:[
      "Chickpeas",
      "Fried Bread",
      "Onions",
      "Spices"
    ],

    extras:[
      {name:"Extra Bhature", price:30},
      {name:"Pickle", price:15}
    ]
  },
  
  {
    id:"m9",
    name:"Veg Manchurian",
    category:"Veg",
    price:210,
    calories:340,
    description:"Indo-Chinese veggie balls in tangy sauce.",
    image:"https://source.unsplash.com/400x300/?manchurian,chinese",

    ingredients:[
      "Cabbage",
      "Carrots",
      "Soy Sauce",
      "Cornflour"
    ],

    extras:[
      {name:"Fried Rice", price:60},
      {name:"Extra Sauce", price:20}
    ]
  },
  
  {
    id:"m10",
    name:"Palak Paneer",
    category:"Veg",
    price:270,
    calories:310,
    description:"Cottage cheese in creamy spinach gravy.",
    image:"https://source.unsplash.com/400x300/?palak,paneer,spinach",

    ingredients:[
      "Paneer",
      "Spinach",
      "Cream",
      "Spices"
    ],

    extras:[
      {name:"Extra Paneer", price:50},
      {name:"Butter Naan", price:45}
    ]
  },
  
  {
    id:"m11",
    name:"Spring Rolls",
    category:"Veg",
    price:160,
    calories:250,
    description:"Crispy rolls filled with vegetables.",
    image:"https://source.unsplash.com/400x300/?spring,rolls,vegetable",

    ingredients:[
      "Cabbage",
      "Carrots",
      "Spring Roll Wrapper",
      "Soy Sauce"
    ],

    extras:[
      {name:"Sweet Chili Sauce", price:20},
      {name:"Extra Rolls", price:40}
    ]
  },
  
  {
    id:"m12",
    name:"Veg Sandwich",
    category:"Veg",
    price:130,
    calories:290,
    description:"Grilled sandwich with fresh vegetables.",
    image:"https://source.unsplash.com/400x300/?sandwich,grilled,vegetable",

    ingredients:[
      "Bread",
      "Cucumber",
      "Tomato",
      "Cheese"
    ],

    extras:[
      {name:"Extra Cheese", price:25},
      {name:"Mayo", price:15}
    ]
  }
];

// Global references
const modal = document.getElementById("dishModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalMeta = document.getElementById("modalMeta");
const ingredientList = document.getElementById("ingredientList");
const extrasList = document.getElementById("extrasList");
const modalQty = document.getElementById("modalQty");
const modalTotal = document.getElementById("modalTotal");
const addPlateBtn = document.getElementById("addPlate");

let selectedDish = null;
let removedIngredients = [];
let addedExtras = [];
let searchTerm = "";
let categoryFilter = "all";
let plate = []; // User's order items
let currentStep = 1; // 1=Select, 2=Edit Plate, 3=Order Review, 4=Payment

/* ---------- Toast Notification ---------- */
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast toast-${type} show`;
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/* ---------- Loading Screen ---------- */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loadingScreen').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('loadingScreen').style.display = 'none';
    }, 500);
  }, 1000);
});

/* ---------- Render Menu Cards ---------- */
function renderMenu(){
  const container = document.getElementById("menu");
  container.innerHTML = "";

  const filtered = menuData.filter(d => {
    const matchesSearch = d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          d.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || d.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  if(filtered.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        <h3>No dishes found</h3>
        <p>Try adjusting your search or filter criteria</p>
      </div>
    `;
    return;
  }

  filtered.forEach((d, index) => {
    const card = document.createElement("div");
    card.className = "card fade-in";
    card.style.animationDelay = `${index * 0.05}s`;
    card.innerHTML = `
      <img src="${d.image}" class="thumb" alt="${d.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300/667eea/ffffff?text=${encodeURIComponent(d.name)}'" />
      <h3>${d.name}</h3>
      <p>${d.description}</p>
      <div class="tags-container">
        <span class="tag tag-category">${d.category}</span>
        <span class="tag tag-price">₹${d.price}</span>
        <span class="tag tag-calories">${d.calories} cal</span>
      </div>
    `;

    card.onclick = () => openModal(d);
    container.appendChild(card);
  });
}

/* ---------- Open Modal ---------- */
function openModal(d){
  selectedDish = d;
  removedIngredients = [];
  addedExtras = [];

  modalImg.src = d.image;
  modalImg.alt = d.name;
  modalImg.onerror = function() {
    this.src = `https://via.placeholder.com/320x220/667eea/ffffff?text=${encodeURIComponent(d.name)}`;
  };
  modalTitle.textContent = d.name;
  modalDesc.textContent = d.description;

  modalMeta.innerHTML = `
    <li><strong>💰 Price:</strong> ₹${d.price}</li>
    <li><strong>🔥 Calories:</strong> ${d.calories}</li>
    <li><strong>🏷️ Category:</strong> ${d.category}</li>
  `;

  ingredientList.innerHTML = "";
  d.ingredients.forEach(ing => {
    const btn = document.createElement("button");
    btn.className = "ingredient-btn";
    btn.textContent = ing;

    btn.onclick = () => {
      btn.classList.toggle("off");
      if(btn.classList.contains("off")){
        removedIngredients.push(ing);
      }else{
        removedIngredients = removedIngredients.filter(i => i !== ing);
      }
      updatePrice();
    };

    ingredientList.appendChild(btn);
  });

  extrasList.innerHTML = "";
  d.extras.forEach((ex, idx) => {
    const btn = document.createElement("button");
    btn.className = "extra-btn";
    btn.textContent = `${ex.name} (+₹${ex.price})`;

    btn.onclick = () => {
      btn.classList.toggle("active");

      if(btn.classList.contains("active")){
        addedExtras.push(idx);
      }else{
        addedExtras = addedExtras.filter(x => x !== idx);
      }

      updatePrice();
    };

    extrasList.appendChild(btn);
  });

  modalQty.value = 1;
  modalQty.oninput = updatePrice;

  updatePrice();
  modal.classList.remove("hidden");
}

/* ---------- Update Price ---------- */
function updatePrice(){
  let base = selectedDish.price;
  let qty = parseInt(modalQty.value) || 1;

  let extraCost = addedExtras.reduce((sum, idx) => 
    sum + selectedDish.extras[idx].price, 0);

  let total = (base + extraCost) * qty;
  modalTotal.textContent = total;
}

/* Add to Plate */
addPlateBtn.onclick = () => {
  const qty = parseInt(modalQty.value) || 1;
  const extras = addedExtras.map(idx => selectedDish.extras[idx]);
  const removed = [...removedIngredients];
  const itemTotal = parseInt(modalTotal.textContent);
  
  plate.push({
    dish: selectedDish,
    quantity: qty,
    extras: extras,
    removedIngredients: removed,
    total: itemTotal
  });
  
  updatePlateCount();
  modal.classList.add("hidden");
  showToast(`Added ${qty}x ${selectedDish.name} to your plate! 🍽️`);
};

/* Close modal */
document.querySelector(".modal-close").onclick = () => modal.classList.add("hidden");
modal.onclick = e => { if(e.target === modal) modal.classList.add("hidden") };


/* ---------- Init ---------- */
// Populate category filter
const categories = ["all", ...new Set(menuData.map(d => d.category))];
const categorySelect = document.getElementById("categoryFilter");
categorySelect.innerHTML = categories.map(c => 
  `<option value="${c}">${c.charAt(0).toUpperCase() + c.slice(1)}</option>`
).join("");

// Search functionality
document.getElementById("search").oninput = (e) => {
  searchTerm = e.target.value;
  renderMenu();
};

// Category filter functionality
categorySelect.onchange = (e) => {
  categoryFilter = e.target.value;
  renderMenu();
};

renderMenu();

/* Dark mode toggle */
document.getElementById("darkToggle").onclick = () => {
  document.documentElement.classList.toggle("dark");
};

/* ---------- Step Management ---------- */
function showStep(step) {
  currentStep = step;
  
  // Smooth scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  document.getElementById("step1").style.display = step === 1 ? "block" : "none";
  document.getElementById("step2").style.display = step === 2 ? "block" : "none";
  document.getElementById("step3").style.display = step === 3 ? "block" : "none";
  document.getElementById("step4").style.display = step === 4 ? "block" : "none";
  
  // Update step indicators
  document.querySelectorAll(".step-indicator").forEach((el, idx) => {
    el.classList.toggle("active", idx + 1 === step);
    el.classList.toggle("completed", idx + 1 < step);
  });
  
  if(step === 2) renderPlateItems();
  if(step === 3) renderOrderReview();
}

function updatePlateCount() {
  const count = plate.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("plateCount").textContent = count;
  document.getElementById("viewPlateBtn").style.display = count > 0 ? "inline-block" : "none";
}

function renderPlateItems() {
  const container = document.getElementById("plateItems");
  
  if(plate.length === 0) {
    container.innerHTML = "<p class='empty-msg'>Your plate is empty. Go back and add some dishes!</p>";
    document.getElementById("proceedToOrderBtn").disabled = true;
    return;
  }
  
  document.getElementById("proceedToOrderBtn").disabled = false;
  
  container.innerHTML = plate.map((item, idx) => `
    <div class="plate-item">
      <img src="${item.dish.image}" class="plate-thumb" />
      <div class="plate-info">
        <h3>${item.dish.name}</h3>
        <p>Quantity: ${item.quantity}</p>
        ${item.extras.length > 0 ? `<p class="extras-txt">Extras: ${item.extras.map(e => e.name).join(", ")}</p>` : ""}
        ${item.removedIngredients.length > 0 ? `<p class="removed-txt">Without: ${item.removedIngredients.join(", ")}</p>` : ""}
        <p class="item-price">₹${item.total}</p>
      </div>
      <button class="remove-btn" onclick="removeFromPlate(${idx})">✕</button>
    </div>
  `).join("");
  
  updatePlateTotal();
}

function removeFromPlate(idx) {
  const dishName = plate[idx].dish.name;
  plate.splice(idx, 1);
  renderPlateItems();
  updatePlateCount();
  showToast(`Removed ${dishName} from plate`, 'info');
}

function updatePlateTotal() {
  const total = plate.reduce((sum, item) => sum + item.total, 0);
  document.getElementById("plateTotal").textContent = total;
}

function renderOrderReview() {
  const container = document.getElementById("orderSummary");
  const total = plate.reduce((sum, item) => sum + item.total, 0);
  const itemCount = plate.reduce((sum, item) => sum + item.quantity, 0);
  
  container.innerHTML = `
    <h3>Order Summary (${itemCount} items)</h3>
    <div class="summary-items">
      ${plate.map(item => `
        <div class="summary-item">
          <div class="summary-item-info">
            <strong>${item.quantity}x ${item.dish.name}</strong>
            ${item.extras.length > 0 ? `<small class="summary-extras">+ ${item.extras.map(e => e.name).join(", ")}</small>` : ''}
            ${item.removedIngredients.length > 0 ? `<small class="summary-removed">- ${item.removedIngredients.join(", ")}</small>` : ''}
          </div>
          <span class="summary-item-price">₹${item.total}</span>
        </div>
      `).join('')}
    </div>
    <div class="summary-divider"></div>
    <div class="summary-total">
      <strong>Total Amount:</strong>
      <strong>₹${total}</strong>
    </div>
  `;
  
  document.getElementById("finalTotal").textContent = total;
}

function processPayment() {
  const method = document.querySelector('input[name="payment"]:checked');
  if(!method) {
    showToast('Please select a payment method', 'error');
    return;
  }
  
  const total = plate.reduce((sum, item) => sum + item.total, 0);
  
  // Simulate payment
  document.getElementById("paymentSection").innerHTML = `
    <div class="success-msg">
      <h2>✅ Payment Successful!</h2>
      <p>Amount Paid: ₹${total}</p>
      <p>Payment Method: ${method.value}</p>
      <p>Your order has been placed successfully!</p>
      <p class="order-id">Order ID: #EW${Date.now().toString().slice(-6)}</p>
      <button class="btn-primary" onclick="resetOrder()">Start New Order</button>
    </div>
  `;
  
  showToast('Order placed successfully! 🎉');
}

function resetOrder() {
  plate = [];
  updatePlateCount();
  showStep(1);
  location.reload();
}

// Expose functions to global scope
window.removeFromPlate = removeFromPlate;
window.processPayment = processPayment;
window.resetOrder = resetOrder;
window.showStep = showStep;

/* ---------- Chatbot ---------- */
function initChatbot() {
  const chatToggle = document.getElementById("chatToggle");
  const chatWindow = document.getElementById("chatWindow");
  const chatClose = document.getElementById("chatClose");
  const chatInput = document.getElementById("chatInput");
  const chatSend = document.getElementById("chatSend");
  const chatMessages = document.getElementById("chatMessages");

  if (!chatToggle || !chatWindow || !chatClose || !chatInput || !chatSend || !chatMessages) {
    console.error("Chat elements not found");
    return;
  }

  const GEMINI_API_KEY = "AIzaSyB-rgGfF6tPBIYRlPSVQPcl35tbieQNvOI";
  const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;

  chatToggle.addEventListener('click', () => {
    console.log("Toggle clicked");
    chatWindow.classList.toggle("hidden");
    if(!chatWindow.classList.contains("hidden")) {
      chatInput.focus();
    }
  });

  chatClose.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log("Close clicked");
    chatWindow.classList.add("hidden");
  });

  function addMessage(text, isUser = false) {
    const msg = document.createElement("div");
    msg.className = isUser ? "user-message" : "bot-message";
    msg.innerHTML = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  async function getGeminiResponse(userMsg) {
    // Create context about the restaurant and menu
    const menuContext = menuData.map(d => 
      `${d.name} (${d.category}) - ${d.description} - Price: ₹${d.price}, Calories: ${d.calories}, Ingredients: ${d.ingredients.join(", ")}`
    ).join("\n");
    
    const systemPrompt = `You are a friendly assistant for EatWise restaurant. Here's our menu:

${menuContext}

You help customers with:
- Menu recommendations based on preferences
- Information about dishes, ingredients, prices, and calories
- Dietary requirements (vegetarian options)
- Order assistance
- General restaurant inquiries

Keep responses concise, friendly, and helpful. Use emojis occasionally. Always refer to our actual menu items.

Customer question: ${userMsg}`;
    
    try {
      const response = await fetch(GEMINI_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: systemPrompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500,
          }
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Error:', errorData);
        throw new Error(`API request failed: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.candidates && data.candidates[0] && data.candidates[0].content) {
        return data.candidates[0].content.parts[0].text;
      } else {
        throw new Error('Invalid response structure');
      }
    } catch (error) {
      console.error('Gemini API Error:', error);
      
      // Fallback to local responses
      const msg = userMsg.toLowerCase();
      
      if(msg.includes("recommend") || msg.includes("suggest")) {
        const dishes = menuData.map(d => d.name).join(", ");
        return `I recommend trying our popular dishes: ${dishes}. All are delicious! 😋`;
      }
      
      if(msg.includes("veg") || msg.includes("vegetarian")) {
        const vegDishes = menuData.filter(d => d.category === "Veg");
        return `We have ${vegDishes.length} vegetarian options: ${vegDishes.map(d => d.name).join(", ")}. All are 100% vegetarian! 🌱`;
      }
      
      if(msg.includes("price") || msg.includes("cost") || msg.includes("cheap")) {
        const cheapest = menuData.reduce((min, d) => d.price < min.price ? d : min);
        return `Our most affordable dish is ${cheapest.name} at ₹${cheapest.price}. Great value! 💰`;
      }
      
      if(msg.includes("calorie") || msg.includes("healthy") || msg.includes("diet")) {
        const lowest = menuData.reduce((min, d) => d.calories < min.calories ? d : min);
        return `For a lighter option, try ${lowest.name} with only ${lowest.calories} calories. Perfect for health-conscious eaters! 🥗`;
      }
      
      for(let dish of menuData) {
        if(msg.includes(dish.name.toLowerCase())) {
          return `${dish.name} - ${dish.description}<br>Price: ₹${dish.price} | Calories: ${dish.calories}<br>Ingredients: ${dish.ingredients.join(", ")}. Want to order it? 🍽️`;
        }
      }
      
      return `I'm here to help! You can ask me about:<br>• Menu recommendations<br>• Vegetarian options<br>• Prices and calories<br>• Specific dishes<br>What would you like to know? 🤔`;
    }
  }

  async function sendMessage() {
    const text = chatInput.value.trim();
    if(!text) return;
    
    addMessage(text, true);
    chatInput.value = "";
    
    // Show typing indicator
    const typingMsg = document.createElement("div");
    typingMsg.className = "bot-message typing-indicator";
    typingMsg.textContent = "Typing...";
    chatMessages.appendChild(typingMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    const response = await getGeminiResponse(text);
    
    // Remove typing indicator
    typingMsg.remove();
    
    addMessage(response, false);
  }

  chatSend.addEventListener('click', sendMessage);
  chatInput.addEventListener('keypress', (e) => {
    if(e.key === "Enter") sendMessage();
  });
}

// Initialize chatbot after DOM is loaded
setTimeout(initChatbot, 100);

/* ---------- Keyboard Shortcuts ---------- */
document.addEventListener('keydown', (e) => {
  // ESC to close modal
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
  }
  
  // Ctrl/Cmd + 1-4 for steps
  if ((e.ctrlKey || e.metaKey) && plate.length > 0) {
    const num = parseInt(e.key);
    if (num >= 1 && num <= 4) {
      e.preventDefault();
      showStep(num);
    }
  }
  
  // / to focus search
  if (e.key === '/' && e.target.tagName !== 'INPUT') {
    e.preventDefault();
    document.getElementById('search').focus();
  }
});
