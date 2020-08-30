import React from 'react';
import style from './Header.module.css';
import Nav from './Nav';
import Logo from './logo';
import Score from './Score';

const Header = (props) => {
  return (
    <div className={style.header}>
      <div className={style.container_header}>
        <Logo />
        <Score totalScores={props.totalScores}/>
      </div>
      <Nav state={props.state} round={props.round} />
    </div>
  );
};

export default Header;
