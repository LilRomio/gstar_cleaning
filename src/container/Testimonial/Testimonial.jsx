import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';

import './Testimonial.scss';

const Testimonial = () => {
  return (
    <>
      <div className="app__testimonial-item app__flex">
        <img src={Image.about12} alt="testimonial" />
        <div className="app__testimonial-content">
          <p className="p-text"></p>
          <div>
            <h4 className="bold-text"></h4>
            <h5 className="p-text"></h5>
          </div>
        </div>
      </div>

      <div className="app__testimonial-btns app__flex">
        <div className="app__flex" onClick={() => {}}>
          <HiChevronLeft />
        </div>

        <div className="app__flex" onClick={() => {}}>
          <HiChevronRight />
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimoniale',
  'app__whitebg'
);
