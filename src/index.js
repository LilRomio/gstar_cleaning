import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';
import { PoliticaInterna } from './components';

ReactDOM.render(
  <BrowserRouter>
    <App />
    <PoliticaInterna />
  </BrowserRouter>,
  document.getElementById('root')
);
