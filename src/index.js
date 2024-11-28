import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/GlobalStyles';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {theme} from './styles/theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <ThemeProvider theme={theme}>
    <App />
    <GlobalStyles/>
    </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);
