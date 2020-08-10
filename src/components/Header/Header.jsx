import React from 'react';
import style from './Header.module.css';
import Nav from './Nav';
import Logo from './logo';
import Score from './Score';

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.container_header}>
        <Logo />
        <Score />
      </div>
      <Nav />
    </div>
  );
};

export default Header;
