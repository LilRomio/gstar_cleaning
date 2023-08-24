import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';

import './Header.scss';

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
const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Buna, noi suntem</p>
              <h1 className="head-text">GSTAR Cleaning</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <div>
              <p className="p-text">
                Noi suntem o echipa tanara si dinamica dornica de performanta.
              </p>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <div>
              <p className="p-text">
                In permanenta cautam sa satisfacem nevoile clientilor nostri,
                oferindu-le servicii de curatenie complexe si de calitate,
                executate cu solutii profesionale, bazandu-ne pe o tehnica de
                varf, menirea noastra fiind satisfacerea celor mai inalte
                exigente.
              </p>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <div>
              <p className="p-text">
                Ne caracterizeaza profesionalismul, flexibilitatea,
                promptitudinea si increderea de care am dat si dam dovada in
                continuare.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.about13} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.about2, images.about3, images.about4].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-index`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
