import React from 'react';
import style from './Nav.module.css';
import ElementNav from './ElementNav';

const Nav = (props) => {
  return (
    <nav className={style.nav}>
      <ul>
        <ElementNav name="Домашние" />
        <ElementNav name="Перелетные" />
        <ElementNav name="Лесные" />
        <ElementNav name="Хищные" />
        <ElementNav name="Морские" />
      </ul>
    </nav>
  );
};

export default Nav;
