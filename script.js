// Prebuilt menu with ingredients + extras
const menuData = [
  {
    id:"m1",
    name:"Margherita Pizza",
    category:"Veg",
    price:220,
    calories:320,
    description:"Classic pizza with tomatoes and cheese.",
    image:"https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=400",

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
    image:"https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400",

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
    name:"Veg Burger",
    category:"Veg",
    price:180,
    calories:420,
    description:"Classic veggie burger with fries.",
    image:"https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400",

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
    id:"m4",
    name:"Dal Makhani",
    category:"Veg",
    price:240,
    calories:380,
    description:"Creamy black lentils with butter and spices.",
    image:"https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400",

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
    id:"m5",
    name:"Masala Dosa",
    category:"Veg",
    price:150,
    calories:280,
    description:"Crispy rice crepe with spiced potato filling.",
    image:"https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=400",

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
    id:"m6",
    name:"Veg Sandwich",
    category:"Veg",
    price:130,
    calories:290,
    description:"Grilled sandwich with fresh vegetables.",
    image:"https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=400",

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
      <img src="${d.image}" class="thumb" alt="${d.name}" loading="lazy" />
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

  modalImg.innerHTML = `<img src="${d.image}" alt="${d.name}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;" />`;
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
