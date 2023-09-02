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
            className="app__prices-circles "
          >
            {[images.about1, images.about15, images.about12].map(
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
                sunt competitive si accesibile. Pentru abonamentele pe termen
                lung, oferim preturi preferentiale, care pot fi discutate si
                personalizate in functie de nevoile unice ale fiecarei locatii.
                <br />
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
                griji pentru costuri sau detalii technice.
              </p>
            </div>
          </div>
        </div>
        <div className="app__header-badge app__flex">
          <div className="tag-cmp ">
            <div className="app__flex" style={{ flexDirection: 'column' }}>
              <h2 className="head-text">
                <span> Tarife Curatare</span> <br /> Canapele / Fotolii /
                Saltele
              </h2>
              <h2 className="bold-text">Curatare cu Injectie - Extractie </h2>
              <p className="p-text">
                Fotoliu - 85 RON <br />
                Canapea cu 2 Locuri - 170 RON <br />
                Canapea cu 3 Locuri - 240 RON <br />
                Canapea Extensibila - 290 RON <br />
                Coltar cu 3 Locuri - 340 RON <br />
                Coltar cu 4 Locuri - 390 RON <br />
                Coltar cu 5 Locuri - 440 RON <br />
                Saltea - 190 RON
              </p>
            </div>
          </div>
        </div>
        <div className="app__header-badge app__flex">
          <div className="tag-cmp ">
            <div className="app__flex" style={{ flexDirection: 'column' }}>
              <h2 className="head-text">
                <span> Promotii </span>
              </h2>
              <br />
              <h2 className="bold-text">
                Abonamentele la curatenie au reducere de minimum 10%
              </h2>
              <br />
              <h2 className="bold-text">
                In perioada 15 Noiembrie - 20 Decembrie pentru serviciul de
                curatenie <br />
                generala clientii beneficiaza de curatarea cu injectie -
                extractie a saltelelor.
              </h2>
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
