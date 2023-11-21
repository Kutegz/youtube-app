import React from 'react';
import './styles/index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './app/home/routes/App.tsx';
import theme from './core/themes/theme.ts';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
