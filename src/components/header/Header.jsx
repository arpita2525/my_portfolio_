

import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import Typed from 'react-typed'; // Import the Typed component
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Arpita Gutte</h1>
        <h5 className="text-light">
          <Typed
            strings={[
              "Enthusiastic Software Developer",
              "Eager to Learn and Grow",
              "Aspiring Full Stack Developer"
              
            ]}
            typeSpeed={80}
            backDelay={1100}
            backSpeed={30}
            loop
          />
        </h5>
        
        <CTA />
        <a href="#portfolio" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
        
      </div>
    </header>
  );
};

export default Header;
