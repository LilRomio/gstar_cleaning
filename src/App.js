import React from 'react';
import { About, Footer, Header, Prices, Testimonial } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Prices />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
