import React from 'react';
import style from './Main.module.css';
import RandomBird from './RandomBird/RandomBird';
import Answers from './Answers/Answers';
import BirdInfo from './BirdInfo/BirdInfo';
import ButtonNextLevel from './ButtonNextLevel/ButtonNextLevel';
import state from './state';



const Header = () => {
  return (
    <main className={style.main}>     
      <RandomBird />
      <div className={style.container_main}>
        <Answers round={state.round} />
        <BirdInfo />
      </div>
      <ButtonNextLevel />
    </main>
  );
};

export default Header;
