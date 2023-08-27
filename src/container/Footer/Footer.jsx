import React, { useState } from 'react';
import './Footer.scss';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

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

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      mobile: mobile,
      message: message,
    };
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

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Nume"
              name="name"
              value={name}
              onChange={handleChangeInput}
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
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Mesajul tau"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            {loading ? 'Se trimite' : 'Trimite Mesaj'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Multumim pentru mesaj!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
