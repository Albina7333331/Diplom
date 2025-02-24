import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Импортируем BrowserRouter
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> {/* Оборачиваем в Router */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
