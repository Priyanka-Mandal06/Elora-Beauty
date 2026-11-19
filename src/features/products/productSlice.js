import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchQuery: '',
  selectedCategory: 'All',
  sortBy: 'default',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Update the product search query.
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },

    // Update the selected product category.
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },

    // Update the product sorting option.
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },

    // Reset all product filters to their default values.
    resetProductFilters: () => initialState,
  },
});

export const { setSearchQuery, setSelectedCategory, setSortBy, resetProductFilters } =
  productSlice.actions;

export default productSlice.reducer;
