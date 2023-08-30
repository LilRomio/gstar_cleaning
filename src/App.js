import React from 'react';
import { About, Footer, Header, Prices, Testimonial } from './container';
import { Navbar, PoliticaInterna } from './components';

import { Routes, Route } from 'react-router-dom';
import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app">
            <Navbar />
            <Header />
            <About />
            <Prices />
            <Testimonial />
            <Footer />
          </div>
        }
      ></Route>
      <Route patch="politica_interna" element={<PoliticaInterna />}></Route>
    </Routes>
  );
};

export default App;
