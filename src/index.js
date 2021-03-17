import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossOrigin="anonymous"
    />
    <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin=""></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossOrigin=""></script>
    <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin=""></script>
    <script>var Alert = ReactBootstrap.Alert;</script>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

