import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/AppTransition'; // React 18 
// import App from './components/AppDeferredValue'; // React 18
import App from './components/AppImperativeHandle'; // React 18
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <footer>Change import App for various demo. Jul 2020</footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
