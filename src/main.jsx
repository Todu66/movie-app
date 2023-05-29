import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
