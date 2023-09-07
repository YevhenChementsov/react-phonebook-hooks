import React from 'react';

import App from '@/components/App/App';
import { theme } from '@/constants/theme';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import '@/index.css';
import 'modern-normalize/modern-normalize.css';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
