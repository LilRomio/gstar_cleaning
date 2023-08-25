import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './About.scss';
import { images } from '../../constants';

const abouts = [
  {
    title: 'Curatenie generala sau de mentinere',
    description:
      'Echipa noastra atenta si responsabila se va ocupa de tot ce este necesar pentru ca locuinta dumneavoastra sa fie curata si ingrijita.',
    imgUrl: images.about11,
  },
  {
    title: 'Servicii de curatare canapele/fotolii/saltele',
    description:
      'Pentru o curatenie desavarsita, aveti nevoie si de canapele si saltele. Aici GStar va ofera servicii de curatare si intretinere periodica pentru canapele, fotolii si saltele, cu solutii profesionale prin tehnici diferite, alese de client. Bazandu-ne pe o experienta vasta, lasam in urma doar clienti multumiti.',
    imgUrl: images.about7,
  },
  {
    title: 'Curatenie post-constructor',
    description:
      'Pentru a beneficia de un spatiu curat în urma constructiei sau reamenajarii, firma GStar este mereu pregatita sa va ofere servicii de curatenie de calitate conform solicitarilor dumneavoastra.',
    imgUrl: images.about5,
  },
  {
    title: 'Servicii de curatenie scari de bloc, birouri sau restaurante',
    description:
      'Pachetul de servicii de curatenie in scari de bloc, birouri si restaurante de firme in Constanta, este unul bine organizat si personalizat in conformitate cu necesitatile clientilor. Obiectivul nostru este aceea de a ne multumi clientii prin calitatea serviciilor oferite.',
    imgUrl: images.about6,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        Expertul tau in servicii <span>Profesionale</span> de{' '}
        <span>Curatenie</span>
        <br /> in <span>Navodari</span> si <span> Mamaia</span>
      </h2>
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

export default About;
