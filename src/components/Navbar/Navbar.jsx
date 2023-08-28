import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss';
import { images } from '../../constants';
import { BiLogoGmail, BiMobileVibration } from 'react-icons/bi';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/">
          <img src={images.logo2} alt="logo" />
        </a>
      </div>

      <ul className="app__navbar-links">
        {['acasa', 'servicii', 'preturi', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div
        className="app__flex"
        style={{ flexDirection: 'column', alignItems: 'flex-start' }}
      >
        <div className="app__navbar-contact p-text">
          <BiMobileVibration className="app__contact-logo" />
          <a className="p-text" href="tel:0733273674 ">
            0733273674{' '}
          </a>
          /
          <a className="p-text" href="tel:0734540243 ">
            0734540243{' '}
          </a>
        </div>
        <div className=" app__navbar-contact  p-text">
          <BiLogoGmail className="app__contact-logo" />
          <a className="p-text" href="mailto:giurgealena@gmail.com">
            giurgealena@gmail.com
          </a>
        </div>
      </div>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['acasa', 'servicii', 'preturi', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
