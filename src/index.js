import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import First from './components/First.js';
import reportWebVitals from './reportWebVitals';
import Second from './components/Second.jsx';
import Troisieme from './components/Troisieme.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <First />
    <Second />
    <Troisieme />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
