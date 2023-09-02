import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { FaFacebookF, FaWhatsappSquare } from 'react-icons/fa';

import { motion } from 'framer-motion';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const { name, email, mobile, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <>
      <h2 className="head-text">
        <span>Contact</span>
      </h2>
      <h2 className="head-text">
        Program de lucru: <span>Marti</span> - <span>Sambata</span>
      </h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:giurgealena@gmail.com" className="p-text">
            giurgealena@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:0733273674 " className="p-text">
            0733273674
          </a>
          {''}/{''}
          <a href="tel:0734540243 " className="p-text">
            0734540243
          </a>
        </div>
      </div>
      <div className="app__social-footer">
        <div>
          <a
            href="whatsapp://send?text=Hello World!&phone=+40733273674"
            target="_blank"
            rel="noreferrer"
          >
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              className="app__flex"
            >
              <FaWhatsappSquare />
            </motion.div>
          </a>
        </div>
        <div>
          <a
            href="https://www.facebook.com/people/Gstar-cleaning-property-management/100090615077315/"
            target="_blank"
            rel="noreferrer"
          >
            <motion.div
              whileInView={{ scale: [0, 1] }}
              whileHover={{ scale: [1, 0.9] }}
              transition={{ duration: 0.25 }}
              className="app__flex"
            >
              <FaFacebookF />
            </motion.div>
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form
          className="app__footer-form app__flex"
          target="_blank"
          action="https://formsubmit.co/5b4a0c357c58de8307d92906dcce9e9f"
          method="POST"
        >
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Nume"
              name="name"
              value={name}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="number"
              placeholder="Telefon"
              name="mobile"
              value={mobile}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Mesajul tau"
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>

          <div className="app__accept p-text ">
            <label>
              <input className="p-text" type="checkbox" required />
              Da sunt de acord cu Politica de confidentialitate generala,&nbsp;
              <Link to="/politica-interna" target="_blank">
                Citeste Politica de confidentialitate
              </Link>
            </label>
          </div>
          {true ? (
            <button className="p-text">{'Trimite Mesaj'}</button>
          ) : (
            <button type="submit" className="p-text" onClick={handleSubmit}>
              {loading ? 'Se trimite' : 'Trimite Mesaj'}
            </button>
          )}
        </form>
      ) : (
        <div>
          <h3 className="head-text">Multumim pentru mesaj!</h3>
        </div>
      )}

      <div className="app__footer-logo ">
        <a
          className="p-text"
          style={{ textDecoration: 'none', color: 'var(--blue-color)' }}
          target="_blank"
          rel="noreferrer"
          href="https://anpc.ro/"
        >
          A.N.P.C.
        </a>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg'
);
