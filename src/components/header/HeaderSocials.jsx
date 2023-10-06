import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/arpita-gutte-140668248/" target="_blank" rel="noreferrer" ><BsLinkedin className="social-icon" /></a>
      <a href="https://github.com/arpita2525" target="_blank" rel="noreferrer" ><FaGithub className="social-icon" /></a>
          </div>
  )
}

export default HeaderSocials