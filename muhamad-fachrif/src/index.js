import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Expression from './components/Expression';
// import Stickynotes from './components/Stickynotes';
import FromMulti from './components/Praktikum-Pertemuan 2/FromMulti'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FromMulti/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
