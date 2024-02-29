import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../../constants/api';
import { IProduct } from '../../types/product.types';

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
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productsApi;
