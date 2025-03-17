import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Use localStorage for web
import { combineReducers } from 'redux';

// Combine reducers if you have multiple
const rootReducer = combineReducers({
  user: userReducer,
});

// Persist configuration
const persistConfig = {
  key: 'root', // Key for storing data
  storage,      // Storage to use (localStorage)
};

// Wrap reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Required for redux-persist
    }),
});

// Create persistor
export const persistor = persistStore(store);
