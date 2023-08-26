import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Prices.scss';
import { images } from '../../constants';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Prices = () => {
  return (
    <>
      <div className="app__prices-item ">
        <div className="app__prices-content app__flex">
          <motion.div
            variant={scaleVariants}
            whileInView={scaleVariants.whileInView}
            className="app__prices-circles"
          >
            {[images.about8, images.about15, images.about12].map(
              (circle, index) => (
                <div className="circle-cmp app__flex" key={`circle-index`}>
                  <img src={circle} alt="circle" />
                </div>
              )
            )}
          </motion.div>
          <h2 className="head-text">
            <span>Tarife</span> si <span>Preturi</span> Curatenie
          </h2>
        </div>
        <div className="app__header-badge">
          <div className="tag-cmp ">
            <div>
              <p className="p-text">
                Preturile pentru serviciile de curatenie oferite de firma GStar
                Cleaning sunt discutate individual si se bazeaza pe mai multi
                factori, cum ar fi suprafata de curatat, complexitatea
                interventiei si frecventa acestora. In acest fel, putem oferi o
                estimare precisa a costurilor si garantam ca serviciile noastre
                sunt competitive si accesibile.Pentru abonamentele pe termen
                lung, oferim preturi preferentiale, care pot fi discutate si
                personalizate in functie de nevoile unice ale fiecarei locatii.
                De asemenea, oferim evaluari gratuite, astfel incat sa putem
                personaliza un plan de servicii de curatenie care sa se
                potriveasca nevoilor si bugetului dumneavoastra.
              </p>
            </div>
          </div>
        </div>
        <div className="app__header-badge">
          <div className="tag-cmp ">
            <div>
              <p className="p-text">
                In pretul final al serviciilor de curatenie sunt incluse
                transportul, consumabilele si produsele de curatat, costul
                echipamentelor si forta de munca, astfel incat sa nu existe
                surprize neplacute. Echipa noastra este dedicata sa va ofere
                servicii de curatenie de calitate, cu un raport calitate-pret
                excelent. Nu ezitati sa ne contactati la numarul de telefon
                pentru a solicita oferta de curatenie. Suntem aici sa va oferim
                solutii personalizate si eficiente de curatenie, astfel incat sa
                puteti avea un mediu curat, sigur si proaspat, fara sa va faceti
                griji pentru costuri sau detalii technice
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Prices, 'app__prices'),
  'preturi',
  'app__primarybg'
);
