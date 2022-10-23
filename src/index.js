import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/_index.scss';
import './style/_normalize.scss';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
