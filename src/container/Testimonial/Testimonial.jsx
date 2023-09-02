import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Testimonial.scss';

const Testimonial = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
      className="app__testimonial"
    >
      <div className="app__testimonial-item app__flex">
        <div className="app__testimonial-content">
          <div>
            <img src={images.testimonial1} alt="testimonial" />
            <p className="p-text">
              Recomand cu caldura GStar Cleaning pentru serviciile lor excelente
              de curatenie. Am apelat la ei recent pentru o curatenie generala a
              casei mele si am fost impresionat de calitatea serviciilor lor.
              Echipa lor de curatenie a fost extrem de profesionista si a facut
              o treabă minunata in a curata fiecare colt al casei mele.
            </p>
            <div>
              <h4 className="bold-text">Madalin</h4>
              <h5 className="p-text">Proprietar Apartament</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="app__testimonial-item app__flex">
        <div className="app__testimonial-content ">
          <img src={images.testimonial4} alt="testimonial" />

          <p className="p-text">
            Recomand cu încredere! Profesionalism și seriozitate
          </p>
          <div>
            <h4 className="bold-text">Manolache Lorenzini Alina</h4>
            <h5 className="p-text">Proprietar Apartament</h5>
          </div>
        </div>
      </div>
      <div className="app__testimonial-item app__flex">
        <div className="app__testimonial-content ">
          <img src={images.testimonial2} alt="testimonial" />

          <p className="p-text">
            Apreciez promptitudinea, discretia si atentia la detalii a echipei
            care realizeaza curatenia in apartamentul noastru. Sunt multumita de
            serviciile de curatenie oferite de firma GStar Cleaning, motiv
            pentru care o recomand cu incredere.
          </p>
          <div>
            <h4 className="bold-text">Rodica Vizireanu</h4>
            <h5 className="p-text">Proprietar Apartament</h5>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimoniale',
  'app__whitebg'
);
