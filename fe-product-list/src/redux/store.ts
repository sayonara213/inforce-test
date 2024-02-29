import productsSlice from './products.slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productsApi } from './services/products.api';

const rootReducer = combineReducers({
  products: productsSlice,
  [productsApi.reducerPath]: productsApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
export type AppStore = ReturnType<typeof setupStore>;
