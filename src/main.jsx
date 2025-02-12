import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import store from './store/store.js';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom'; // Corregido: Importar desde 'react-router-dom'

import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/desarrollo-frontend-react-2025"> {/* Corregido: Agregar barra inicial */}
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
