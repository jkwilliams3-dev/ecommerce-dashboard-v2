# E-Commerce Dashboard V2 🛍️

A modern, feature-rich e-commerce dashboard built with Angular, Material Design, and Chart.js featuring a clean green/teal commerce theme.

![E-commerce Dashboard Screenshot](https://via.placeholder.com/1200x600/0d1f17/10b981?text=E-Commerce+Dashboard+V2)

## ✨ Features

- **Product Management** - Complete product catalog with sales tracking
- **Order Tracking** - Real-time order status and processing
- **Sales Analytics** - Dual-axis charts showing revenue and order volume
- **Customer Insights** - Track customer growth and engagement
- **Top Products** - Visual breakdown of best-selling items
- **Responsive Design** - Fully responsive layout for all devices
- **Modern Commerce Theme** - Clean green/teal color scheme with professional cards

## 🎨 Design Features

- **Green/Teal Color Scheme** - Professional e-commerce aesthetic
- **Clean Modern Cards** - Sharp, minimal card design
- **Gradient Borders** - Subtle accent lines for visual depth
- **Icon Integration** - Emoji-based product and stat icons
- **Status Indicators** - Color-coded order status badges
- **Hover Animations** - Smooth interactive card effects
- **Dark Theme** - Built-in dark mode optimized for extended use

## 🛠️ Tech Stack

- **Angular 21** - Modern component-based framework
- **TypeScript** - Type-safe development
- **Angular Material** - Material Design components
- **Chart.js** - Interactive charting library
- **CSS3** - Modern styling with gradients and transitions

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
ng serve

# Navigate to http://localhost:4200/

# Build for production
ng build

# Run unit tests
ng test
```

## 🚀 Usage

The dashboard displays mock e-commerce data. In a production environment, you would connect this to your backend API.

### Customization

**Update Statistics:**
```typescript
// src/app/app.html
<div class="stat-value">$124,592</div>
```

**Modify Chart Data:**
```typescript
// src/app/app.ts
data: {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [...]
}
```

**Add Products:**
```html
<!-- src/app/app.html -->
<div class="product-item">
  <div class="product-info">
    <div class="product-icon">🎧</div>
    <div>
      <div class="product-name">Your Product</div>
      <div class="product-sales">000 sales</div>
    </div>
  </div>
  <div class="product-revenue">$0,000</div>
</div>
```

## 📊 Dashboard Sections

### Statistics Overview
- Total Revenue with growth percentage
- Total Orders with monthly comparison
- Product count with weekly additions
- Customer base with growth metrics

### Sales Chart
- Dual-axis bar chart
- Revenue (left axis)
- Order count (right axis)
- Weekly breakdown
- Interactive tooltips

### Recent Orders Table
- Order ID with customer name
- Product details
- Order amount
- Status indicators (Delivered, Processing, Pending)
- Hover effects for row highlighting

### Top Products
- Product ranking by revenue
- Sales count tracking
- Revenue breakdown
- Quick visual product identification

## 🎯 Features Overview

### Order Management
- Real-time order tracking
- Status updates (Delivered, Processing, Pending)
- Customer information
- Order value tracking

### Analytics
- Revenue tracking
- Sales trends
- Product performance
- Customer growth metrics

### Product Catalog
- Top sellers identification
- Sales volume tracking
- Revenue attribution
- Visual product icons

## 🔧 Configuration

The dashboard can be customized through:
- Chart period filters (7 days, 30 days, 3 months)
- Action buttons for adding products and viewing reports
- Table sorting and filtering (can be extended)
- Status badge customization

## 📱 Responsive Breakpoints

- Desktop: 1400px+
- Tablet: 768px - 1399px
- Mobile: < 768px

## 🎨 Color Palette

- Primary: `#10b981` (Green)
- Secondary: `#14b8a6` (Teal)
- Background: `#0d1f17` (Dark Green)
- Surface: `#1a2f26` (Slate Green)
- Text: `#e8f5e9` (Light Green)
- Muted: `#94a3b8` (Gray)

## 🏗️ Project Structure

```
src/
├── app/
│   ├── app.ts          # Main component with chart logic
│   ├── app.html        # Dashboard template
│   ├── app.css         # Component styles
│   └── app.config.ts   # App configuration
├── styles.css          # Global styles
└── index.html          # Entry point
```

## 🚀 Deployment

```bash
# Build for production
ng build --configuration production

# Output will be in dist/ecommerce-dashboard-v2/browser/
```

## 📄 License

MIT License - feel free to use this project for your portfolio or commercial projects.

## 👨‍💻 Author

Built by [jkwilliams3-dev](https://github.com/jkwilliams3-dev)

---

**Note:** This is a portfolio project demonstrating modern Angular development practices, Material Design integration, and e-commerce dashboard design patterns.
