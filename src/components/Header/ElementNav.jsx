import React from 'react';
import style from './Nav.module.css';

const ElementNav = (props) => {
  return (
    <li>
      <a href="." className={style.a}>
        {props.name}
      </a>
    </li>
  );
};

export default ElementNav;
