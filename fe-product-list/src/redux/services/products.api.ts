import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constants/api';
import { ICreateProduct, IProduct } from '../../types/product.types';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL.base, mode: 'cors' }),
  endpoints: ({ query, mutation }) => ({
    getAllProducts: query<IProduct[], void>({
      query: () => API_URL.products,
    }),
    getProductById: query<IProduct, string>({
      query: (id) => `${API_URL.product}/${id}`,
    }),
    addProduct: mutation<IProduct, Partial<ICreateProduct>>({
      query: (body) => ({
        url: API_URL.product,
        method: 'POST',
        body,
      }),
    }),
    updateProduct: mutation<IProduct, { id: string; data: Partial<IProduct> }>({
      query: ({ id, data }) => ({
        url: `${API_URL.product}/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteProduct: mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({
        url: `${API_URL.product}/${id}`,
        method: 'DELETE',
      }),
    }),
    addComment: mutation<IProduct, { id: string; comment: string }>({
      query: ({ id, comment }) => ({
        url: `${API_URL.product}/comment/${id}`,
        method: 'POST',
        body: { comment },
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useAddCommentMutation,
} = productsApi;
