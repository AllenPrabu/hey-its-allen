import React from 'react';
import ReactDOM from 'react-dom/client';
// Make sure BrowserRouter is imported here
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* By wrapping <App /> here, the entire application has access to the router */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);