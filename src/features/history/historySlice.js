import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recentlyViewed: [],
  orders: [],
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    // Add a product to recently viewed history.
    addRecentlyViewed: (state, action) => {
      const product = action.payload;

      // Remove duplicates and keep only the latest 10 products.
      state.recentlyViewed = state.recentlyViewed.filter((item) => item.id !== product.id);

      state.recentlyViewed.unshift(product);
      state.recentlyViewed = state.recentlyViewed.slice(0, 10);
    },

    // Save a new order at the beginning of order history.
    addOrder: (state, action) => {
      state.orders.unshift(action.payload);
    },

    // Clear recently viewed products.
    clearRecentlyViewed: (state) => {
      state.recentlyViewed = [];
    },

    // Clear all saved orders.
    clearOrders: (state) => {
      state.orders = [];
    },
  },
});

// Export actions so components can update history.
export const { addRecentlyViewed, addOrder, clearRecentlyViewed, clearOrders } =
  historySlice.actions;

export default historySlice.reducer;
