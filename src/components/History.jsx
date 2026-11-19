import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Clock3, Trash2, Package, ShoppingBag, Receipt, X, AlertTriangle } from 'lucide-react';

import ProductCard from './ProductCard';
import { clearRecentlyViewed, clearOrders } from '../features/history/historySlice';

function History() {
  const dispatch = useDispatch();

  const recentlyViewed = useSelector((state) => state.history.recentlyViewed);
  const orders = useSelector((state) => state.history.orders);

  const [showClearConfirmation, setShowClearConfirmation] = useState(false);

  // Clear recently viewed products.
  const handleClearHistory = () => {
    dispatch(clearRecentlyViewed());
  };

  // Clear orders after confirmation.
  const handleConfirmClearOrders = () => {
    dispatch(clearOrders());
    setShowClearConfirmation(false);
  };

  return (
    <section id="history" className="scroll-mt-24 bg-[#F1ECE6] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Recently viewed products. */}
        <div className="mb-16">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2 text-[#B77C78]">
                <Clock3 size={16} />
                <p className="text-xs uppercase tracking-[0.3em]">Your browsing journey</p>
              </div>

              <h2 className="font-serif text-3xl text-[#352B29] sm:text-4xl">Recently Viewed</h2>

              <p className="mt-3 text-sm text-[#8B7771]">Pick up where you left off.</p>
            </div>

            {recentlyViewed.length > 0 && (
              <button
                onClick={handleClearHistory}
                className="flex items-center gap-2 text-xs tracking-wider text-[#8B7771] transition hover:text-[#B77C78]"
              >
                <Trash2 size={14} />
                CLEAR HISTORY
              </button>
            )}
          </div>

          {recentlyViewed.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
              {recentlyViewed.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white/60 py-10 text-center">
              <Clock3 size={35} className="mx-auto text-[#B77C78]" />

              <p className="mt-4 font-serif text-xl text-[#352B29]">Nothing viewed yet</p>

              <p className="mt-2 text-sm text-[#8B7771]">Products you explore will appear here.</p>
            </div>
          )}
        </div>

        <div className="my-14 border-t border-[#D9C5BD]" />

        {/* Order history. */}
        <div>
          <div className="mb-3 flex items-center gap-2 text-[#B77C78]">
            <Receipt size={17} />
            <p className="text-xs uppercase tracking-[0.3em]">Your purchases</p>
          </div>

          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-3xl text-[#352B29] sm:text-4xl">Order History</h2>

              <p className="mt-3 text-sm text-[#8B7771]">Keep track of your beauty purchases.</p>
            </div>

            {orders.length > 0 && (
              <button
                onClick={() => setShowClearConfirmation(true)}
                className="flex items-center gap-2 text-xs tracking-wider text-[#B77C78] transition hover:text-red-600"
              >
                <Trash2 size={14} />
                CLEAR ORDER HISTORY
              </button>
            )}
          </div>

          {orders.length > 0 ? (
            <div className="space-y-5">
              {orders.map((order) => (
                <div key={order.id} className="border border-[#EBD8D2] bg-white/80 p-5 sm:p-7">
                  <div className="flex flex-col gap-3 border-b border-[#EBD8D2] pb-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs text-[#8B7771]">ORDER ID</p>

                      <h3 className="mt-1 text-sm font-semibold text-[#352B29]">{order.id}</h3>

                      <p className="mt-1 text-xs text-[#8B7771]">
                        {new Date(order.date).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                    </div>

                    <span className="flex w-fit items-center gap-2 rounded-full bg-[#EBD8D2] px-4 py-2 text-xs text-[#8B5E59]">
                      <Package size={14} />
                      {order.status}
                    </span>
                  </div>

                  <div className="space-y-4 py-5">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="h-16 w-14 object-cover"
                        />

                        <div className="flex-1">
                          <h4 className="font-serif text-base text-[#352B29]">{item.name}</h4>

                          <p className="mt-1 text-xs text-[#8B7771]">Quantity: {item.quantity}</p>
                        </div>

                        <p className="text-sm font-semibold text-[#352B29]">
                          ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-[#EBD8D2] pt-4">
                    <span className="text-sm text-[#756964]">Total Amount</span>

                    <span className="text-lg font-semibold text-[#352B29]">
                      ₹{order.total.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white/60 py-12 text-center">
              <ShoppingBag size={40} className="mx-auto text-[#B77C78]" />

              <h3 className="mt-5 font-serif text-2xl text-[#352B29]">No orders yet</h3>

              <p className="mt-2 text-sm text-[#8B7771]">
                Your completed purchases will appear here.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Confirmation dialog for clearing orders. */}
      {showClearConfirmation && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/40 px-4">
          <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="clear-orders-title"
            className="relative w-full max-w-sm bg-[#FAF7F2] p-7 shadow-2xl"
          >
            <button
              onClick={() => setShowClearConfirmation(false)}
              aria-label="Close confirmation"
              className="absolute right-4 top-4 text-[#8B7771] hover:text-[#352B29]"
            >
              <X size={19} />
            </button>

            <AlertTriangle size={35} className="mx-auto text-[#B77C78]" />

            <h3
              id="clear-orders-title"
              className="mt-5 text-center font-serif text-2xl text-[#352B29]"
            >
              Clear Order History?
            </h3>

            <p className="mt-3 text-center text-sm leading-6 text-[#756964]">
              Are you sure you want to delete all your previous orders? This action cannot be
              undone.
            </p>

            <div className="mt-7 flex gap-3">
              <button
                onClick={() => setShowClearConfirmation(false)}
                className="flex-1 border border-[#D9C5BD] py-3 text-xs tracking-wider text-[#352B29] transition hover:bg-[#EBD8D2]"
              >
                CANCEL
              </button>

              <button
                onClick={handleConfirmClearOrders}
                className="flex-1 bg-[#352B29] py-3 text-xs tracking-wider text-white transition hover:bg-[#B77C78]"
              >
                CLEAR ORDERS
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default History;
