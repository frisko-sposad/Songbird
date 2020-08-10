import React from 'react';
import style from './Main.module.css';
import RandomBird from './RandomBird/RandomBird';
import Answers from './Answers/Answers';
import BirdInfo from './BirdInfo/BirdInfo';

const Header = () => {
  return (
    <main className={style.main}>
      <RandomBird />
      <div className={style.container_main}>
        <Answers />
        <BirdInfo />
      </div>
    </main>
  );
};

export default Header;
