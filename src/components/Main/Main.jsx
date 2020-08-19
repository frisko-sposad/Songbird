import React from 'react';
import style from './Main.module.css';
import RandomBird from './RandomBird/RandomBird';
import Answers from './Answers/Answers';
import BirdInfo from './BirdInfo/BirdInfo';
import ButtonNextLevel from './ButtonNextLevel/ButtonNextLevel';

let currentRound = 2;

const Header = () => {
  return (
    <main className={style.main}>
      <RandomBird />
      <div className={style.container_main}>
        <Answers round={currentRound} />
        <BirdInfo />
      </div>
      <ButtonNextLevel />
    </main>
  );
};

export default Header;
