import { useDispatch, useSelector } from 'react-redux';
import { SearchX, SlidersHorizontal } from 'lucide-react';

import { products } from '../data/products';
import ProductCard from './ProductCard';

import {
  setSelectedCategory,
  setSortBy,
  resetProductFilters,
} from '../features/products/productSlice';

function BestSellers() {
  const dispatch = useDispatch();

  // Get the current search, category and sorting values from Redux.
  const { searchQuery, selectedCategory, sortBy } = useSelector((state) => state.products);

  const categories = ['All', 'Skincare', 'Makeup', 'Haircare', 'Bodycare'];
  const query = searchQuery.trim().toLowerCase();

  // Filter products by search query and selected category.
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      !query ||
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      (product.tag || '').toLowerCase().includes(query);

    const matchesCategory =
      selectedCategory === 'All' ||
      product.category.toLowerCase() === selectedCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  // Sort a copy of the filtered products by price.
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'lowToHigh') {
      return a.price - b.price;
    }

    if (sortBy === 'highToLow') {
      return b.price - a.price;
    }

    return 0;
  });

  const hasActiveFilters =
    searchQuery.trim() !== '' || selectedCategory !== 'All' || sortBy !== 'default';

  // Reset search, category and sorting preferences.
  const handleClearFilters = () => {
    dispatch(resetProductFilters());
  };

  return (
    <section id="products" className="scroll-mt-24 bg-[#FAF7F2] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading. */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#B77C78]">
            Carefully selected for you
          </p>

          <h2 className="font-serif text-3xl text-[#352B29] sm:text-4xl">
            {query ? 'Search Results' : 'Our Best Sellers'}
          </h2>

          <p className="mt-3 text-sm text-[#8B7771]">
            {query
              ? `Products matching "${searchQuery.trim()}"`
              : 'Discover the products everyone is loving.'}
          </p>
        </div>

        {/* Category filters. */}
        <div className="mb-6 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => dispatch(setSelectedCategory(category))}
              className={`rounded-full border px-5 py-2 text-xs transition sm:text-sm ${
                selectedCategory === category
                  ? 'border-[#352B29] bg-[#352B29] text-white'
                  : 'border-[#D9C5BD] text-[#6F5A55] hover:border-[#B77C78]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Sorting and clear filters. */}
        <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={17} className="text-[#8B7771]" />

            <label htmlFor="product-sort" className="text-sm text-[#6F5A55]">
              Sort by:
            </label>

            <select
              id="product-sort"
              value={sortBy}
              onChange={(event) => dispatch(setSortBy(event.target.value))}
              className="rounded-full border border-[#D9C5BD] bg-white px-4 py-2 text-sm text-[#352B29] outline-none focus:border-[#B77C78]"
            >
              <option value="default">Default</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>

          {hasActiveFilters && (
            <button
              onClick={handleClearFilters}
              className="text-sm text-[#B77C78] underline underline-offset-4 transition hover:text-[#352B29]"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Product grid or empty state. */}
        {sortedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-[#8B7771]">
              Showing {sortedProducts.length} product
              {sortedProducts.length !== 1 ? 's' : ''}
            </p>
          </>
        ) : (
          <div className="py-16 text-center">
            <SearchX size={42} className="mx-auto mb-4 text-[#B77C78]" />

            <h3 className="font-serif text-xl text-[#352B29]">No products found</h3>

            <p className="mt-2 text-sm text-[#8B7771]">Try another product name or category.</p>

            <button
              onClick={handleClearFilters}
              className="mt-5 rounded-full bg-[#352B29] px-6 py-2 text-sm text-white transition hover:bg-[#B77C78]"
            >
              Show All Products
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default BestSellers;
