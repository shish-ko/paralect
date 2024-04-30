import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';
import { MantineProvider } from '@mantine/core';
import { theme } from 'styles/theme.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme} >
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
);
