import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import { Global, ThemeProvider } from '@emotion/react';
import { App } from 'components/App';
import './index.css';
import { theme } from './components/styles/theme'
import { GlobalStyles } from './components/styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
