import React from 'react';
import { FaFacebookF, FaWhatsappSquare } from 'react-icons/fa';
import { BiLogoGmail, BiMobileVibration } from 'react-icons/bi';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BiMobileVibration />
      </div>
      <div>
        <FaWhatsappSquare />
      </div>
      <div>
        <FaFacebookF />
      </div>
      <div>
        <BiLogoGmail />
      </div>
    </div>
  );
};

export default SocialMedia;
