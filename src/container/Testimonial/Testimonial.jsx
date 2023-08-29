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
            <img src={images.about1} alt="testimonial" />
            <p className="p-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              officiis quam tempora, incidunt repellat assumenda atque alias,
              corporis veniam culpa maxime corrupti nostrum modi quae aspernatur
              rerum odio placeat? Architecto.
            </p>
            <div>
              <h4 className="bold-text">Elena</h4>
              <h5 className="p-text">Propietar</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="app__testimonial-item app__flex">
        <div className="app__testimonial-content">
          <div>
            <img src={images.about1} alt="testimonial" />
            <p className="p-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus quis quibusdam fugit adipisci tempora facilis molestias
              laudantium natus amet deserunt sed, sequi libero optio error
              voluptate? Dolorum voluptatem tempore aliquid?
            </p>
            <div>
              <h4 className="bold-text">Romeo</h4>
              <h5 className="p-text">Web Dev</h5>
            </div>
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
