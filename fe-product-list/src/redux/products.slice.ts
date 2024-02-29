import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICreateProduct, IProduct } from '../types/product.types';

const initialState = {
  products: [] as IProduct[],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<ICreateProduct>) {
      const { name, weight, count } = action.payload;

      state.products.push({ ...action.payload, id: Date.now().toString() });
    },
    removeProduct(state, action: PayloadAction<string>) {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
    updateProduct(state, action: PayloadAction<IProduct>) {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      state.products[index] = action.payload;
    },
  },
});

export default productsSlice.reducer;

export const { addProduct, removeProduct, updateProduct } = productsSlice.actions;
