import React from 'react';
import CV from '../../assets/6october23.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
      Resume
      </a>
      
    </div>
  );
};

export default CTA;
