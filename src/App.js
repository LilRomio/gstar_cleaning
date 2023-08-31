import React from 'react';
import Home from './container/Home';
import { PoliticaInterna } from './components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="politica-interna" element={<PoliticaInterna />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
