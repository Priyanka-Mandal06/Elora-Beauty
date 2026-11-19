import { useState } from 'react';
import { Minus, Plus, ShoppingBag, Trash2, X, ArrowLeft, CheckCircle } from 'lucide-react';
import { useDispatch } from 'react-redux';

import { clearCart } from '../features/cart/cartSlice';
import { addOrder } from '../features/history/historySlice';

function CartDrawer({ isOpen, onClose, cart, cartTotal, onIncrease, onDecrease, onRemove }) {
  const dispatch = useDispatch();

  // Control the checkout and order confirmation views.
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  // Store customer delivery information.
  const [customer, setCustomer] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  // Update the customer form when an input changes.
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCustomer((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Return from checkout to the shopping bag.
  const handleBackToCart = () => {
    setCheckoutOpen(false);
  };

  // Save the order in Redux and clear the shopping cart.
  const handlePlaceOrder = (event) => {
    event.preventDefault();

    if (cart.length === 0) return;

    const newOrderNumber = `ELORA-${Date.now().toString().slice(-8)}`;

    const order = {
      id: newOrderNumber,
      customer: { ...customer },
      items: cart.map((item) => ({ ...item })),
      total: cartTotal,
      date: new Date().toISOString(),
      status: 'Placed',
    };

    dispatch(addOrder(order));
    dispatch(clearCart());

    setOrderNumber(newOrderNumber);
    setOrderPlaced(true);
    setCheckoutOpen(false);
  };

  // Reset the drawer when it is closed.
  const handleClose = () => {
    onClose();

    setCheckoutOpen(false);
    setOrderPlaced(false);
    setOrderNumber('');

    setCustomer({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
    });
  };

  // Do not display the drawer when it is closed.
  if (!isOpen) return null;

  return (
    <>
      {/* Dark overlay behind the drawer. */}
      <div className="fixed inset-0 z-[60] bg-black/40" onClick={handleClose} aria-hidden="true" />

      {/* Shopping bag and checkout panel. */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag and checkout"
        className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-[#FAF7F2] shadow-2xl"
      >
        {/* Drawer header. */}
        <div className="flex items-center justify-between border-b border-[#352B29]/10 px-6 py-5">
          <div className="flex items-center gap-3">
            {checkoutOpen && (
              <button
                onClick={handleBackToCart}
                aria-label="Back to shopping bag"
                className="hover:text-[#B77C78]"
              >
                <ArrowLeft size={19} />
              </button>
            )}

            <ShoppingBag size={20} />

            <h2 className="font-serif text-2xl">
              {orderPlaced ? 'Order Confirmed' : checkoutOpen ? 'Checkout' : 'Your Shopping Bag'}
            </h2>
          </div>

          <button onClick={handleClose} aria-label="Close cart">
            <X size={22} />
          </button>
        </div>

        {/* Order confirmation screen. */}
        {orderPlaced ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <CheckCircle size={55} className="text-[#B77C78]" />

            <h3 className="mt-6 font-serif text-3xl text-[#352B29]">Thank You!</h3>

            <p className="mt-3 text-sm text-[#756964]">
              Your order has been recorded successfully.
            </p>

            <p className="mt-5 rounded bg-[#EBD8D2] px-5 py-3 text-sm font-semibold text-[#352B29]">
              Order ID: {orderNumber}
            </p>

            <button
              onClick={handleClose}
              className="mt-8 bg-[#352B29] px-8 py-3 text-xs tracking-widest text-white transition hover:bg-[#B77C78]"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        ) : checkoutOpen ? (
          /* Checkout form. */
          <form onSubmit={handlePlaceOrder} className="flex flex-1 flex-col overflow-y-auto">
            <div className="flex-1 space-y-5 overflow-y-auto px-6 py-6">
              <div>
                <h3 className="font-serif text-xl text-[#352B29]">Delivery Details</h3>

                <p className="mt-1 text-xs text-[#756964]">
                  Enter your details to place your order.
                </p>
              </div>

              {/* Customer name. */}
              <div>
                <label className="mb-2 block text-xs text-[#6F5A55]">Full Name</label>

                <input
                  type="text"
                  name="name"
                  value={customer.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full border border-[#D9C5BD] bg-white px-4 py-3 text-sm outline-none focus:border-[#B77C78]"
                />
              </div>

              {/* Email address. */}
              <div>
                <label className="mb-2 block text-xs text-[#6F5A55]">Email Address</label>

                <input
                  type="email"
                  name="email"
                  value={customer.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  className="w-full border border-[#D9C5BD] bg-white px-4 py-3 text-sm outline-none focus:border-[#B77C78]"
                />
              </div>

              {/* Phone number. */}
              <div>
                <label className="mb-2 block text-xs text-[#6F5A55]">Phone Number</label>

                <input
                  type="tel"
                  name="phone"
                  value={customer.phone}
                  onChange={handleInputChange}
                  placeholder="10-digit mobile number"
                  pattern="[6-9][0-9]{9}"
                  title="Enter a valid 10-digit Indian mobile number"
                  required
                  className="w-full border border-[#D9C5BD] bg-white px-4 py-3 text-sm outline-none focus:border-[#B77C78]"
                />
              </div>

              {/* Delivery address. */}
              <div>
                <label className="mb-2 block text-xs text-[#6F5A55]">Full Address</label>

                <textarea
                  name="address"
                  value={customer.address}
                  onChange={handleInputChange}
                  placeholder="House number, street, area..."
                  rows={3}
                  required
                  className="w-full resize-none border border-[#D9C5BD] bg-white px-4 py-3 text-sm outline-none focus:border-[#B77C78]"
                />
              </div>

              {/* City and state. */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-2 block text-xs text-[#6F5A55]">City</label>

                  <input
                    type="text"
                    name="city"
                    value={customer.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    required
                    className="w-full min-w-0 border border-[#D9C5BD] bg-white px-3 py-3 text-sm outline-none focus:border-[#B77C78]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs text-[#6F5A55]">State</label>

                  <input
                    type="text"
                    name="state"
                    value={customer.state}
                    onChange={handleInputChange}
                    placeholder="State"
                    required
                    className="w-full min-w-0 border border-[#D9C5BD] bg-white px-3 py-3 text-sm outline-none focus:border-[#B77C78]"
                  />
                </div>
              </div>

              {/* PIN code. */}
              <div>
                <label className="mb-2 block text-xs text-[#6F5A55]">PIN Code</label>

                <input
                  type="text"
                  name="pincode"
                  value={customer.pincode}
                  onChange={handleInputChange}
                  placeholder="6-digit PIN code"
                  pattern="[0-9]{6}"
                  title="Enter a valid 6-digit PIN code"
                  required
                  className="w-full border border-[#D9C5BD] bg-white px-4 py-3 text-sm outline-none focus:border-[#B77C78]"
                />
              </div>

              {/* Order total summary. */}
              <div className="border-t border-[#352B29]/10 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-[#756964]">Order Total</span>

                  <span className="font-semibold text-[#352B29]">
                    ₹{cartTotal.toLocaleString('en-IN')}
                  </span>
                </div>

                <p className="mt-2 text-xs text-[#756964]">
                  Demo checkout only. No actual payment will be processed.
                </p>
              </div>
            </div>

            {/* Place order button. */}
            <div className="border-t border-[#352B29]/10 px-6 py-5">
              <button
                type="submit"
                className="w-full bg-[#352B29] py-4 text-xs tracking-[0.2em] text-white transition hover:bg-[#B77C78]"
              >
                PLACE ORDER
              </button>
            </div>
          </form>
        ) : (
          /* Shopping cart product list. */
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {cart.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingBag size={45} className="text-[#B77C78]" />

                  <h3 className="mt-5 font-serif text-2xl">Your bag is empty</h3>

                  <p className="mt-2 text-sm text-[#756964]">
                    Discover something beautiful for yourself.
                  </p>

                  <button
                    onClick={handleClose}
                    className="mt-6 bg-[#352B29] px-7 py-3 text-xs tracking-widest text-white hover:bg-[#B77C78]"
                  >
                    CONTINUE SHOPPING
                  </button>
                </div>
              ) : (
                /* Display each product in the cart. */
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 border-b border-[#352B29]/10 pb-6">
                      {/* Product image. */}
                      <img src={item.image} alt={item.name} className="h-28 w-24 object-cover" />

                      {/* Product details. */}
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <p className="text-[10px] tracking-widest text-[#B77C78]">
                            {item.category}
                          </p>

                          <h3 className="mt-1 font-serif text-lg">{item.name}</h3>

                          <p className="mt-1 text-sm font-semibold">
                            ₹{item.price.toLocaleString('en-IN')}
                          </p>
                        </div>

                        {/* Quantity and remove controls. */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-[#D8C9C2]">
                            <button
                              onClick={() => onDecrease(item.id)}
                              className="p-2"
                              aria-label={`Decrease ${item.name} quantity`}
                            >
                              <Minus size={13} />
                            </button>

                            <span className="px-2 text-xs">{item.quantity}</span>

                            <button
                              onClick={() => onIncrease(item.id)}
                              className="p-2"
                              aria-label={`Increase ${item.name} quantity`}
                            >
                              <Plus size={13} />
                            </button>
                          </div>

                          <button
                            onClick={() => onRemove(item.id)}
                            aria-label={`Remove ${item.name}`}
                            className="text-[#B77C78] hover:text-red-600"
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart subtotal and checkout button. */}
            {cart.length > 0 && (
              <div className="border-t border-[#352B29]/10 px-6 py-6">
                <div className="flex justify-between text-sm">
                  <span className="text-[#756964]">Subtotal</span>

                  <span className="font-semibold">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>

                <p className="mt-2 text-xs text-[#756964]">
                  Shipping and taxes calculated at checkout.
                </p>

                <button
                  onClick={() => setCheckoutOpen(true)}
                  className="mt-6 w-full bg-[#352B29] py-4 text-xs tracking-[0.2em] text-white transition hover:bg-[#B77C78]"
                >
                  PROCEED TO CHECKOUT
                </button>

                <button
                  onClick={handleClose}
                  className="mt-4 w-full text-center text-xs tracking-widest underline underline-offset-4"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            )}
          </>
        )}
      </aside>
    </>
  );
}

export default CartDrawer;
