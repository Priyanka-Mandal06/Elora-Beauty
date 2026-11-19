import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add a product or increase its quantity if it already exists.
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    // Increase the quantity of a product in the cart.
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },

    // Decrease quantity and remove the product when it reaches zero.
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (item) {
        item.quantity -= 1;

        if (item.quantity <= 0) {
          state.items = state.items.filter((product) => product.id !== action.payload);
        }
      }
    },

    // Remove a product from the cart.
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    // Clear all cart items after checkout.
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
