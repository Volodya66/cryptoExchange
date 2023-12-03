import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { store } from 'reducer/store';
import { Provider } from 'react-redux'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/cryptoExchange'>
       <Provider store={store}>
        <App />
      </Provider>,

    </BrowserRouter>
  </React.StrictMode>
);
