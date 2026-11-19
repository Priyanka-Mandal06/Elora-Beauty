import { useDispatch } from 'react-redux';
import { ShoppingBag, Star } from 'lucide-react';

import { addToCart } from '../features/cart/cartSlice';
import { addRecentlyViewed } from '../features/history/historySlice';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  // Record the product when viewed.
  const handleProductView = () => {
    dispatch(addRecentlyViewed(product));
  };

  return (
    <div className="group">
      {/* Product image and add-to-cart button. */}
      <div className="relative overflow-hidden bg-[#F1ECE6]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          onClick={handleProductView}
          className="h-64 w-full cursor-pointer object-cover transition duration-700 group-hover:scale-105 md:h-80"
        />

        <span className="absolute left-3 top-3 bg-white px-3 py-2 text-[9px] tracking-widest text-[#352B29]">
          {product.tag}
        </span>

        <button
          onClick={() => dispatch(addToCart(product))}
          aria-label={`Add ${product.name} to cart`}
          className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 bg-white/95 py-3 text-xs tracking-wider text-[#352B29] transition hover:bg-[#352B29] hover:text-white"
        >
          <ShoppingBag size={15} />
          ADD TO BAG
        </button>
      </div>

      {/* Product details. */}
      <div className="pt-4">
        <div className="mb-2 flex items-center gap-1 text-xs">
          <Star size={13} fill="#C49A6C" color="#C49A6C" />
          <span>{product.rating}</span>
        </div>

        <p className="text-[10px] uppercase tracking-widest text-[#B77C78]">{product.category}</p>

        <h3
          onClick={handleProductView}
          className="mt-1 cursor-pointer font-serif text-lg text-[#352B29]"
        >
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-3">
          <span className="text-sm font-semibold">₹{product.price}</span>

          <span className="text-xs text-gray-400 line-through">₹{product.originalPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
