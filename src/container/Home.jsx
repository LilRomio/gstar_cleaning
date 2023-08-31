import React from 'react';
import { Navbar } from '../components';
import Header from './Header/Header';
import About from './About/About';
import Prices from './Prices/Prices';
import Testimonial from './Testimonial/Testimonial';
import Footer from './Footer/Footer';
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <About />
      <Prices />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
