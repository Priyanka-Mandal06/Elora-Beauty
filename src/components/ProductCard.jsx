import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseQuantity, decreaseQuantity } from '../features/cart/cartSlice';
import { addRecentlyViewed } from '../features/history/historySlice';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [touchActive, setTouchActive] = useState(false);

  const cartItem = useSelector((state) => state.cart.items.find((item) => item.id === product.id));

  const quantity = cartItem?.quantity || 0;
  const isAdded = quantity > 0;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleIncrease = () => {
    dispatch(increaseQuantity(product.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(product.id));
  };

  const handleProductView = () => {
    dispatch(addRecentlyViewed(product));
  };

  const handleImagePointerDown = (event) => {
    if (event.pointerType === 'touch') {
      setTouchActive((previous) => !previous);
    }
  };

  return (
    <div
      className={`group rounded-sm p-2 transition-colors duration-300 ${
        touchActive ? 'bg-[#E8E1DB]' : 'bg-transparent hover:bg-[#E8E1DB]'
      }`}
    >
      <div
        className="relative overflow-hidden cursor-pointer"
        onPointerDown={handleImagePointerDown}
        onClick={handleProductView}
      >
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-72 object-cover transition-transform duration-500 ${
            touchActive ? 'scale-105' : 'group-hover:scale-105'
          }`}
        />

        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            touchActive ? 'opacity-10' : 'opacity-0 group-hover:opacity-10'
          }`}
        />
      </div>

      <div className="pt-4">
        <h3 className="text-[#352B29] font-medium cursor-pointer" onClick={handleProductView}>
          {product.name}
        </h3>

        <p className="text-[#8B7772] mt-1">₹{product.price}</p>

        {isAdded ? (
          <div className="mt-4 flex items-center justify-between gap-2">
            <span className="flex-1 text-center py-3 text-xs tracking-wider bg-[#D6D3D1] text-[#57534E]">
              ADDED TO BAG
            </span>

            <div className="flex items-center border border-[#352B29]">
              <button
                onClick={handleDecrease}
                aria-label="Decrease quantity"
                className="px-3 py-3 text-[#352B29] hover:bg-[#EBD8D2] active:bg-[#EBD8D2]"
              >
                −
              </button>

              <span className="min-w-7 text-center text-sm text-[#352B29]">{quantity}</span>

              <button
                onClick={handleIncrease}
                aria-label="Increase quantity"
                className="px-3 py-3 text-[#352B29] hover:bg-[#EBD8D2] active:bg-[#EBD8D2]"
              >
                +
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={handleAddToCart}
            className="w-full mt-4 py-3 text-sm tracking-wider transition-colors duration-300 bg-white text-[#352B29] border border-[#352B29] hover:bg-[#352B29] hover:text-white active:bg-[#352B29] active:text-white"
          >
            ADD TO BAG
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
