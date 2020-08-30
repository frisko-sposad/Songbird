import React from 'react';
import style from './Header.module.css';
import logo from './logo.png';

const Logo = () => {
  return <img className={style.logo} src={logo} alt="" />;
};

export default Logo;
