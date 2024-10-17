import React from 'react';
import { createRoot } from 'react-dom/client'; // Use createRoot for React 18+
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import './index.css'; // Your global styles

// Get the root element
const rootElement = document.getElementById('root');

// Create a root for rendering
const root = createRoot(rootElement);

// Render the application
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
