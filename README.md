# 🍽️ EatWise - Smart Restaurant Ordering System

A modern, feature-rich restaurant ordering web application with AI-powered chatbot assistance, built with vanilla JavaScript, HTML, and CSS.

## ✨ Features

### 🎯 Core Functionality
- **Multi-Step Ordering Process**: Select dishes → Edit plate → Review order → Payment
- **Customizable Menu Items**: Add/remove ingredients and extras
- **Real-time Price Calculation**: Dynamic price updates based on customizations
- **Smart Search & Filters**: Find dishes by name, description, or category
- **Shopping Cart Management**: Add, remove, and modify items before checkout

### 🤖 AI Integration
- **Gemini AI Chatbot**: Intelligent assistant for menu recommendations
- **Natural Language Processing**: Ask about dishes, prices, ingredients, and dietary options
- **Contextual Responses**: Fallback to local responses if API unavailable

### 🎨 Design & UX
- **Modern UI**: Gradient themes, glassmorphism effects
- **Smooth Animations**: Card fade-ins, button ripples, modal transitions
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Toast Notifications**: Non-intrusive success/error messages
- **Loading Screen**: Beautiful animated loader

### ⌨️ Keyboard Shortcuts
- `ESC` - Close modal
- `/` - Focus search
- `Ctrl/Cmd + 1-4` - Navigate between steps (when items in cart)

### 🎯 Interactive Elements
- **Ingredient Removal**: Click to remove unwanted ingredients
- **Extra Additions**: Add extras with visual feedback
- **Quantity Selection**: Adjust portions before adding to cart
- **Payment Methods**: Choose from UPI, Card, or Cash on Delivery

## 🚀 Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **AI**: Google Gemini API
- **Images**: Unsplash Source API
- **Design**: Custom CSS with animations and transitions
- **No frameworks**: Pure vanilla JS for lightweight performance

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/eatwise.git
cd eatwise
```

2. Open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

3. (Optional) Add your own Gemini API key in `script.js`:
```javascript
const GEMINI_API_KEY = "your-api-key-here";
```

## 🎮 Usage

1. **Browse Menu**: Scroll through 12+ delicious vegetarian dishes
2. **Customize**: Click any dish to customize ingredients and add extras
3. **Add to Plate**: Review and add customized items to your order
4. **Review Order**: Check your complete order with itemized pricing
5. **Payment**: Select payment method and complete your order
6. **Chat Assistant**: Click the chatbot for menu recommendations and help

## 🌟 Features Showcase

### Menu Items Include:
- 🍕 Margherita Pizza
- 🍝 Pasta Alfredo
- 🧈 Paneer Tikka
- 🍔 Veg Burger
- 🍛 Dal Makhani
- 🍚 Veg Biryani
- 🥞 Masala Dosa
- 🥙 Chole Bhature
- 🥟 Veg Manchurian
- 🥬 Palak Paneer
- 🥟 Spring Rolls
- 🥪 Veg Sandwich

### Customization Options:
- Remove any ingredient
- Add extras (cheese, toppings, sides)
- Adjust quantity
- See real-time price updates

## 🎨 Design Highlights

- **Color Scheme**: Purple gradient theme (#667eea → #764ba2)
- **Typography**: Modern sans-serif fonts with proper hierarchy
- **Spacing**: Generous whitespace for clean layout
- **Shadows**: Layered shadows for depth
- **Animations**: 15+ custom CSS animations
- **Icons**: Emoji-based for universal compatibility

## 🔧 Configuration

Edit `script.js` to modify:
- Menu items and pricing
- AI chatbot responses
- Animation timings
- Color themes

Edit `style.css` to customize:
- Colors and gradients
- Spacing and layout
- Animation effects
- Dark mode styles

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ by Maithil

## 🙏 Acknowledgments

- Google Gemini AI for chatbot functionality
- Unsplash for food images
- Inspiration from modern food delivery apps

## 📞 Support

For support, email your-email@example.com or open an issue in the repository.

---

⭐ Star this repo if you found it helpful!
