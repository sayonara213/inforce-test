import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICreateProduct, IProduct } from '../types/product.types';
import { productsApi } from './services/products.api';

type LoadingState = 'idle' | 'pending' | 'fulfilled' | 'rejected';

const initialState = {
  products: [] as IProduct[],
  loading: 'idle' as LoadingState,
  error: null as string | null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<ICreateProduct>) {
      const { name, weight, count, imageUrl } = action.payload;

      state.products.push({
        name,
        weight,
        count,
        imageUrl,
        id: Date.now().toString(),
        comments: [],
      });
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
    updateProduct(state, action: PayloadAction<Omit<IProduct, 'comments'>>) {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      console.log(index, action.payload);

      state.products[index] = { ...action.payload, comments: [] };
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(productsApi.endpoints.getAllProducts.matchPending, (state) => {
        state.loading = 'pending';
      })
      .addMatcher(productsApi.endpoints.getAllProducts.matchFulfilled, (state, action) => {
        state.loading = 'fulfilled';
        state.products = action.payload;
      })
      .addMatcher(productsApi.endpoints.getAllProducts.matchRejected, (state, action) => {
        state.loading = 'rejected';
        state.error = action.error?.message ?? 'Failed to fetch products';
      });
  },
});

export default productsSlice.reducer;

export const { addProduct, removeProduct, updateProduct } = productsSlice.actions;
