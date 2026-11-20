# ELORA BEAUTY – Beauty E-Commerce Store

A modern, responsive beauty e-commerce storefront built with **React.js, Redux Toolkit, Redux Persist, and Tailwind CSS**. ELORA BEAUTY provides a clean shopping experience with product discovery, category filtering, cart management, checkout, and order history.

## Project Overview

ELORA BEAUTY is a frontend e-commerce application designed around a premium beauty and skincare brand. It features an elegant interface, responsive layouts, and interactive shopping functionality.

The application demonstrates component-based development, centralized state management, client-side routing, and browser-based data persistence.



## 🎥 Project Demo

Watch the complete walkthrough of ELORA BEAUTY, showcasing its features, shopping cart functionality, responsive design and user experience.

▶️ [Watch Project Demo]([https://drive.google.com/file/d/1ACTQaytqmqfkHM_jqxn6tGN4qS9QfwTk/view?usp=sharing](https://drive.google.com/file/d/11wXVyqwkZiwkdg47Y01HJVETmMx-YR-V/view?usp=sharing))

## 🌐 Live Website

[Visit ELORA BEAUTY](https://elora-beauty-xi.vercel.app/)

## 💻 Source Code

[View GitHub Repository](https://github.com/Priyanka-Mandal06/Elora-Beauty)


## Key Features

### 1. Responsive User Interface
- Clean and modern beauty-store design.
- Responsive layouts for desktop, tablet, and mobile.
- Consistent typography and brand color palette.
- Smooth scrolling between website sections.

### 2. Product Discovery
- Product categories including Skincare, Makeup, Haircare, and Bodycare.
- Product cards with images, prices, ratings, and labels.
- Product search by name, category, and tag.
- Category-based product filtering.
- Price sorting: Low to High and High to Low.
- Clear filters option.

### 3. Shopping Cart
- Add products to the shopping bag.
- Increase or decrease product quantities.
- Remove individual products.
- Automatic cart subtotal calculation.
- Cart state persists using Redux Persist and browser local storage.

### 4. Checkout Experience
- Integrated checkout form.
- Customer delivery information fields.
- Form validation for email, phone number, and PIN code.
- Order confirmation with a generated order ID.
- Automatic cart clearing after placing an order.

### 5. Browsing and Order History
- Recently viewed products.
- Duplicate products are handled in recently viewed history.
- Keeps the latest 10 recently viewed products.
- Order history with customer and order details.
- Clear history and order management actions.
- History persists using Redux Persist and browser local storage.

### 6. Additional UI Features
- Expandable product search.
- Mobile navigation menu.
- Promotional banner.
- Newsletter subscription interface.
- Social media links.

## Technology Stack

| Technology | Purpose |
|---|---|
| React.js | Component-based user interface |
| JavaScript (ES6+) | Application logic |
| Tailwind CSS | Responsive styling |
| Redux Toolkit | Centralized state management |
| Redux Persist | Persisting selected Redux state |
| React Redux | Connecting React components to Redux |
| React Router DOM | Client-side routing |
| Lucide React | Interface icons |
| React Simple Icons | Social media icons |
| Vite | Development server and build tool |
| Git & GitHub | Version control and source code hosting |
| Vercel | Deployment |

## State Management

The application uses Redux Toolkit with three feature slices:

- **Cart Slice:** Manages cart items, quantities, and removal actions.
- **Product Slice:** Manages search queries, selected categories, and sorting preferences.
- **History Slice:** Manages recently viewed products and order history.

Redux Persist is configured to store cart and history data in browser local storage, allowing selected information to remain available after refreshing the page.

## Project Structure

```text
elora-beauty/
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── app/
│   │   └── store.js
│   │
│   ├── components/
│   │   ├── BestSellers.jsx
│   │   ├── CartDrawer.jsx
│   │   ├── CategorySection.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   └── PromoBanner.jsx
│   │
│   ├── data/
│   │   └── products.js
│   │
│   ├── features/
│   │   ├── cart/
│   │   │   └── cartSlice.js
│   │   ├── history/
│   │   │   └── historySlice.js
│   │   └── products/
│   │       └── productSlice.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Installation and Setup

Follow these steps to run the project locally.

### Prerequisites

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/Priyanka-Mandal06/Elora-Beauty.git
```

### 2. Navigate to the project directory

```bash
cd elora-beauty
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal to view the application.

### 5. Create a production build

```bash
npm run build
```

## Application Notes

This project is a frontend demonstration of an e-commerce shopping experience.

- Product information is maintained using static JavaScript data.
- Cart and order history are stored in the browser through Redux Persist.
- Checkout demonstrates form validation and order creation on the client side.
- No backend API, database, or real payment gateway is currently integrated.
- Newsletter subscription currently demonstrates frontend interaction only.

## Future Improvements

- Integrate a backend using Node.js and Express.js.
- Connect MongoDB for product, customer, and order storage.
- Implement user registration and authentication.
- Integrate a secure payment gateway.
- Add product details pages and reviews.
- Connect newsletter subscriptions to an email service.

## Learning Outcomes

Through this project, I gained practical experience in:

- Building reusable React components.
- Managing application state using Redux Toolkit.
- Persisting selected state with Redux Persist.
- Implementing product search, filtering, and sorting.
- Handling forms and client-side validation.
- Building responsive interfaces using Tailwind CSS.
- Managing source code with Git and GitHub.
- Preparing a React application for production deployment.

## Author

**Priyanka Mandal**

B.Tech – Computer Science Engineering

GitHub: https://github.com/Priyanka-Mandal06

---

*ELORA BEAUTY – Beauty begins with you.*
