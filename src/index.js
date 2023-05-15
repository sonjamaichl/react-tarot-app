import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts/FontsFree-Net-Dream-Avenue.ttf'
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />  
    </React.StrictMode>
  </BrowserRouter>
);

