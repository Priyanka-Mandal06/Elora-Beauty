import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X, Clock3 } from 'lucide-react';

function Navbar({ cartCount, onCartClick, searchQuery, onSearchChange, onSearchSubmit }) {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Close the mobile navigation menu.
  const closeMenu = () => setMenuOpen(false);

  // Highlight the currently selected navigation section.
  const getNavLinkClass = (hash) => {
    const isActive = location.hash === hash || (!location.hash && hash === '#home');

    return `transition-colors duration-300 ${
      isActive ? 'text-[#B77C78]' : 'text-[#352B29] hover:text-[#B77C78]'
    }`;
  };

  // Submit the product search.
  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchQuery.trim()) {
      onSearchSubmit(searchQuery);
      setSearchOpen(false);
    }
  };

  // Close search and clear its input.
  const closeSearch = () => {
    setSearchOpen(false);
    onSearchChange('');
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#EBD8D2] bg-[#FAF7F2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Mobile menu toggle. */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#352B29] transition-colors hover:text-[#B77C78] active:text-[#B77C78] md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

          {/* Brand logo. */}
          <a
            href="#home"
            onClick={closeMenu}
            className="shrink-0 text-2xl font-serif tracking-widest text-[#352B29] sm:text-3xl"
          >
            ELORA
            <span className="block text-center text-[9px] tracking-[0.35em]">BEAUTY</span>
          </a>

          {/* Desktop navigation. */}
          <nav className="hidden items-center gap-6 text-sm md:flex lg:gap-8">
            <a href="#home" className={getNavLinkClass('#home')}>
              Home
            </a>

            <a href="#categories" className={getNavLinkClass('#categories')}>
              Categories
            </a>

            <a href="#products" className={getNavLinkClass('#products')}>
              Best Sellers
            </a>

            <a
              href="#history"
              className={`flex items-center gap-1.5 ${getNavLinkClass('#history')}`}
            >
              <Clock3 size={15} />
              History
            </a>

            <a href="#about" className={getNavLinkClass('#about')}>
              About
            </a>
          </nav>

          {/* Search and cart controls. */}
          <div className="flex items-center gap-3">
            {searchOpen ? (
              <form
                onSubmit={handleSubmit}
                className="flex h-10 w-40 items-center rounded-full border border-[#D9C5BD] bg-white/70 px-3 shadow-sm transition-all focus-within:border-[#B77C78] sm:w-56 lg:w-64"
              >
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => onSearchChange(event.target.value)}
                  placeholder="Search products..."
                  aria-label="Search products"
                  autoFocus
                  className="min-w-0 flex-1 bg-transparent text-sm text-[#352B29] outline-none placeholder:text-[#A18D86]"
                />

                <button
                  type="submit"
                  aria-label="Submit search"
                  disabled={!searchQuery.trim()}
                  className="ml-2 shrink-0 text-[#8B5E59] transition-colors hover:text-[#B77C78] disabled:opacity-40"
                >
                  <Search size={19} />
                </button>

                <button
                  type="button"
                  onClick={closeSearch}
                  aria-label="Close search"
                  className="ml-2 shrink-0 text-[#9A8983] transition-colors hover:text-[#352B29]"
                >
                  <X size={16} />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Open product search"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9C5BD] text-[#352B29] transition-colors hover:bg-[#EBD8D2] hover:text-[#8B5E59] active:bg-[#EBD8D2]"
              >
                <Search size={19} />
              </button>
            )}

            {/* Shopping cart and item count. */}
            <button
              onClick={onCartClick}
              aria-label={`Shopping cart with ${cartCount} items`}
              className="relative flex h-10 w-10 items-center justify-center text-[#352B29] transition-colors hover:text-[#B77C78] active:text-[#B77C78]"
            >
              <ShoppingBag size={21} />

              {cartCount > 0 && (
                <span className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#B77C78] text-[10px] text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation. */}
        {menuOpen && (
          <nav className="flex flex-col gap-4 pb-5 text-sm md:hidden">
            <a href="#home" onClick={closeMenu} className={getNavLinkClass('#home')}>
              Home
            </a>

            <a href="#categories" onClick={closeMenu} className={getNavLinkClass('#categories')}>
              Categories
            </a>

            <a href="#products" onClick={closeMenu} className={getNavLinkClass('#products')}>
              Best Sellers
            </a>

            <a
              href="#history"
              onClick={closeMenu}
              className={`flex items-center gap-2 ${getNavLinkClass('#history')}`}
            >
              <Clock3 size={15} />
              History
            </a>

            <a href="#about" onClick={closeMenu} className={getNavLinkClass('#about')}>
              About
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
