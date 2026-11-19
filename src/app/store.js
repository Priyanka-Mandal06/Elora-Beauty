import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from '../features/cart/cartSlice';
import productReducer from '../features/products/productSlice';
import historyReducer from '../features/history/historySlice';

// Ensure Redux Persist uses the correct local storage export.
const storageEngine = storage?.default ?? storage;

// Save cart data in local storage.
const persistedCartReducer = persistReducer({ key: 'cart', storage: storageEngine }, cartReducer);

// Save browsing and order history in local storage.
const persistedHistoryReducer = persistReducer(
  { key: 'history', storage: storageEngine },
  historyReducer
);

// Combine all feature reducers into one root reducer.
const rootReducer = combineReducers({
  cart: persistedCartReducer,
  products: productReducer,
  history: persistedHistoryReducer,
});

// Configure the Redux store.
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Redux Persist actions contain values that are not serializable.
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Enable Redux state persistence.
export const persistor = persistStore(store);
