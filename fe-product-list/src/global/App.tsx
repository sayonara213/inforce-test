import React from 'react';

import { AppRouter } from './router/router';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { setupStore } from '../redux/store';

import '@mantine/core/styles.css';

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <MantineProvider>
        <AppRouter />
      </MantineProvider>
    </Provider>
  );
}

export default App;
