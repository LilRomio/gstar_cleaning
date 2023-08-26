import React from 'react';

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {['acasa', 'servicii', 'preturi', 'contact'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#f70776' } : {}}
        />
      ))}
    </div>
  );
};

export default NavigationDots;
