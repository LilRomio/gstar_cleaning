import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.scss';

const abouts = [{}];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        Expertul tău în servicii <span>profesionale</span> de{' '}
        <span>Curățenie.</span>
      </h2>
      <div className="app__profiles"></div>
    </>
  );
};

export default About;
