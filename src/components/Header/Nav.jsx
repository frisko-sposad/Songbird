import React from 'react';
import style from './Nav.module.css';

const Nav = (props) => {
  const allRound = props.state.nameRound.map((name, index) => {
    if (index === props.round) {
      return (
        <li key={index} className={style.activ}>
          {name}
        </li>
      );
    } else {
      return <li key={index}>{name}</li>;
    }
  });

  return (
    <nav className={style.nav}>
      <ul>{allRound}</ul>
    </nav>
  );
};

export default Nav;


