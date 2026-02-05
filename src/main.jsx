import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.jsx'
import './index.css';
import NewTab from './pages/newtab.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/newsletter-app" element={<App />} />
        <Route path="/newsletter-app/Articles" element={<NewTab />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);