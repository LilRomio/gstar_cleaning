import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
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
    <div className="app__header app__flex">
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
              <p className="p-text">
                o echipa tanara si dinamica dornica de performanta.
              </p>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <div>
              <p className="p-text">
                Curat repede si bine! Asta ne defineste, asta ne motiveaza!
              </p>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <div>
              <p className="p-text">
                Curat repede, pentru ca stim cat de important este timpul
                dumneavoastra !
              </p>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <div>
              <p className="p-text">
                Curat bine, asa cum ne recomanda toti clientii nostri din
                Navodari si Mamaia!
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

export default AppWrap(Header, 'acasa');
