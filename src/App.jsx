import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { decreaseQuantity, increaseQuantity, removeFromCart } from './features/cart/cartSlice';
import { setSearchQuery } from './features/products/productSlice';

import BestSellers from './components/BestSellers';
import CartDrawer from './components/CartDrawer';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PromoBanner from './components/PromoBanner';
import History from './components/History';

function HomePage() {
  const location = useLocation();
  const dispatch = useDispatch();

  // Get cart items and search query from Redux.
  const cart = useSelector((state) => state.cart.items);
  const submittedSearchQuery = useSelector((state) => state.products.searchQuery);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchInput, setSearchInput] = useState(submittedSearchQuery);

  // Synchronize the search input with Redux.
  useEffect(() => {
    setSearchInput(submittedSearchQuery);
  }, [submittedSearchQuery]);

  // Scroll to a section when its URL hash changes.
  useEffect(() => {
    if (!location.hash) return;

    const sectionId = decodeURIComponent(location.hash.slice(1));

    requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }, [location.hash]);

  // Apply the search query and scroll to products.
  const handleSearchSubmit = (query) => {
    const trimmedQuery = query.trim();

    dispatch(setSearchQuery(trimmedQuery));
    setSearchInput(trimmedQuery);

    document.getElementById('products')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  // Calculate the cart item count and total price.
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchInput}
        onSearchChange={setSearchInput}
        onSearchSubmit={handleSearchSubmit}
      />

      <main>
        <Hero />
        <CategorySection />
        <BestSellers />
        <History />
        <PromoBanner />
      </main>

      <Footer />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        cartTotal={cartTotal}
        onIncrease={(productId) => dispatch(increaseQuantity(productId))}
        onDecrease={(productId) => dispatch(decreaseQuantity(productId))}
        onRemove={(productId) => dispatch(removeFromCart(productId))}
      />
    </>
  );
}

// Configure the single homepage route.
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
