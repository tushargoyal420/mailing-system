import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "./component/styles/GlobalStyles.css"
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <BrowserRouter>
      <App />
      </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
