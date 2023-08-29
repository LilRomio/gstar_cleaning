import React from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import { images } from '../../constants';

import { AppWrap, MotionWrap } from '../../wrapper';

const abouts = [
  {
    title: 'Curatenie generala sau de mentinere',
    description:
      'Curatenie generala sau de mentinere. Serviciul de curatenie generala sau de intretinere oferit de Gstar Cleaning se concentreaza pe realizarea curateniei generale sau mentinerea curateniei in spatiile comerciale, institutii sau locuinte. Oferim servicii de curatenie rezidentiala, incluzand curatenie in apartamente si vile. Echipa noastra ofera servicii de calitate superioara pentru a le asigura clientilor un mediu curat si confortabil acasa. Acest serviciu poate fi personalizat in functie de necesitatile fiecarui client si poate fi programat in functie de programul sau de disponibilitatea acestuia.',
    imgUrl: images.about11,
  },

  {
    title: 'Curatenie post-constructor',
    description:
      'Curatenie post constructor. Echipa noastra de curatenie are experienta necesare pentru a face fata oricarei provocari pe care o aveti, oferind servicii complete de curatenie post constructor. Folosim doar echipamente si produse de inalta calitate, adaptate special pentru fiecare lucrare, pentru a va asigura satisfactie cu rezultatul final.',
    imgUrl: images.about5,
  },
  {
    title: 'Servicii de curatenie birouri sau restaurante',
    description:
      'Servicii de curatenie birouri si restaurante. Oferim servicii de curatenie pentru birouri, adaptate nevoilor si cerintelor fiecarui companii. Acordam o importanta deosebita confidentialitatii si sigurantei, fiind constienti de importanta acestor aspecte pentru afacerile dumnevaoastra. ',
    imgUrl: images.about6,
  },
  {
    title: 'Servicii de curatare canapele / fotolii / saltele',
    description:
      'Servicii de curatare canapele, saltele si fotolii. Garantam curatarea si igienizarea tapiteriilor in profunzime, nu doar la suprafata, cu echipamente profesioanale marca Karcher folosind tehnologia de injectie-extractie, prin aspirare puternica. De asemenea, folosim si detergenti cu uscare rapida.',
    imgUrl: images.about18,
  },

  {
    title: 'Cosmetica auto',
    description:
      'Cosmetica auto. Serviciul de detailing auto oferit presupune curatarea, degresarea, dezinfectarea tapiteriei cu aparatura profesioanala cu  injectie-extractie, hidratarea tapiteriei de piele, curatarea mochetelor si a covoraselor, curatare plafon, stalpi, curatare portbagaj. Produsele oferite vor prelungi durata de viata a componentelor de plastic, cauciuc, piele.',
    imgUrl: images.about17,
  },
  {
    title: 'Curatenie Curte',
    description:
      'Curatenie curte. Facem noi curatenie in curte, pentru ca tu sa te simti relaxat.',
    imgUrl: images.about19,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        <span>Expertul</span> tau in servicii <span>Profesionale</span> de{' '}
        <span>Curatenie</span>
        <br /> in <span>Constanta</span> , <span> Mamaia</span> si{' '}
        <span>Navodari</span>
      </h2>
      <h4 className="bold-text">
        Oferim o gama variata de servicii de curatenie
      </h4>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'servicii',
  'app__whitebg'
);
