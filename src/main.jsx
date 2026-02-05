import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.jsx'
import './index.css';
import NewTab from './pages/newtab.jsx';
import { BrowserRouter,Routes,Route,HashRouter } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
<StrictMode>
  <HashRouter>
  <BrowserRouter basename="/newsletter-app_v3">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Articles" element={<NewTab />} />
    </Routes>
  </BrowserRouter>
  </HashRouter>

</StrictMode>
);