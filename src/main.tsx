import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './styles/globalStyles';
import { app } from './firebaseConfig';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastContainer />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
