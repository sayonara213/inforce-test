import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../layout/layout';
import { ProductsList } from '../../screens/products-list/products-list';
import { ProductScreen } from '../../screens/product/product';

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ProductsList />} />
          <Route path='/product/:id' element={<ProductScreen />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
