import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Global } from './styles';
import { CustomThemeProvider } from './useThemes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <BrowserRouter>
        <Global />
        <App />
      </BrowserRouter>
    </CustomThemeProvider>
  </React.StrictMode>
);
