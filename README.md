# 🍽️ EatWise - Smart Restaurant Ordering System

A modern, feature-rich restaurant ordering web application with AI-powered chatbot assistance, built with vanilla JavaScript, HTML, and CSS.

![EatWise Preview](https://img.shields.io/badge/Version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen.svg)

## ✨ Features

### 🎯 Core Functionality
- **Multi-Step Ordering Process**: Intuitive 4-step workflow (Select → Edit → Review → Payment)
- **Customizable Menu Items**: Full control over ingredients and extras
- **Real-time Price Calculation**: Dynamic pricing based on customizations
- **Smart Search & Filters**: Instant search by name, description, or category
- **Shopping Cart Management**: Complete cart control with add/remove/edit capabilities

### 🤖 AI Integration
- **Gemini AI Chatbot**: Intelligent virtual assistant for menu recommendations
- **Natural Language Processing**: Conversational queries about dishes, prices, and dietary needs
- **Contextual Responses**: Smart fallback system for offline functionality

### 🎨 Design & UX
- **Modern UI**: Stunning gradient themes with glassmorphism effects
- **Smooth Animations**: 15+ custom CSS animations (fade-ins, ripples, transitions)
- **Dark Mode**: Seamless light/dark theme toggle with persistence
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Touch Optimized**: 44px minimum touch targets for mobile accessibility
- **Toast Notifications**: Non-intrusive success/error feedback
- **Loading Screen**: Elegant animated splash screen

### ⌨️ Keyboard Shortcuts
- `ESC` - Close modal
- `/` - Focus search bar
- `Ctrl/Cmd + 1-4` - Quick navigation between steps (when cart has items)

### 🎯 Interactive Elements
- **Ingredient Removal**: One-click ingredient exclusion with visual feedback
- **Extra Additions**: Add premium extras with animated confirmations
- **Quantity Selection**: Flexible portion control before checkout
- **Payment Methods**: Multiple options (UPI, Credit/Debit Card, Cash on Delivery)

## 🚀 Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **AI**: Google Gemini API (1.5 Flash model)
- **Images**: Unsplash Source API
- **Design**: Custom CSS Grid/Flexbox with advanced animations
- **No Frameworks**: Pure vanilla JS for optimal performance and zero dependencies
- **Responsive**: CSS Media Queries for mobile-first design

## 📦 Installation & Setup

1. **Clone the repository:**
```bash
git clone https://github.com/Chronos778/EatWise.git
cd eatwise
```

2. **Open the application:**
   - Simply open `index.html` in your browser, or
   - Use a local development server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

3. **Configure AI Chatbot (Optional):**
   - Get a free API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Add your key in `script.js`:
```javascript
const GEMINI_API_KEY = "your-api-key-here";
```

4. **Access the app:**
   - Open `http://localhost:8000` in your browser
   - Start ordering delicious food! 🍽️

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

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Recommended |
| Firefox | Latest | ✅ Supported |
| Safari | Latest | ✅ Supported |
| Edge | Latest | ✅ Supported |
| Mobile Safari | iOS 12+ | ✅ Optimized |
| Chrome Mobile | Latest | ✅ Optimized |

## 📱 Mobile Responsiveness

EatWise is fully optimized for all screen sizes:

- **Mobile (< 768px)**: Single column layout, touch-optimized buttons
- **Tablet (768px - 1024px)**: Two-column grid, balanced spacing
- **Desktop (> 1024px)**: Multi-column layout, full features
- **Touch Devices**: Minimum 44px touch targets, swipe gestures

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

Created with ❤️ by **Maithil** ([Chronos778](https://github.com/Chronos778))

## 🙏 Acknowledgments

- **Google Gemini AI** - Powering the intelligent chatbot
- **Unsplash** - High-quality food imagery
- **Modern Food Delivery Apps** - UI/UX inspiration

## 📊 Project Stats

- **Lines of Code**: ~2000+ (HTML/CSS/JS)
- **File Size**: Lightweight (<100KB total)
- **Load Time**: <2s on standard connection
- **Performance**: 90+ Lighthouse score

## 🐛 Known Issues & Future Enhancements

- [ ] Add user authentication
- [ ] Integrate real payment gateway
- [ ] Add order history tracking
- [ ] Multi-language support
- [ ] Progressive Web App (PWA) support

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/Chronos778/EatWise/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Chronos778/EatWise/discussions)

---

**⭐ Star this repo if you found it helpful!**

Made with 💜 and lots of ☕
