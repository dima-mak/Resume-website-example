import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com' target='_blank'>
        <BsLinkedin />
      </a>
      <a href='http://github.com' target='_blank'>
        <FaGithub />
      </a>
      <a href='http://instagram.com' target='_blank'>
        <AiFillInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
