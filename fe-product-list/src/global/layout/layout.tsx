import React from 'react';

import { Nav } from './nav/nav';
import { Outlet } from 'react-router-dom';
import container from '../../styles/container.module.scss';

export const Layout = () => {
  return (
    <>
      <Nav />
      <div className={container.container}>
        <Outlet />
      </div>
    </>
  );
};
