import React from 'react';
import style from './ButtonNextLevel.module.css';
import state from '../state';

const ButtonNextLevel = () => {
  return (
    <button
      className={style.ButtonNextLevel}
      onClick={() => {
        console.log('Работает');
        if (state.round < 6) state.round++;
        console.log("Номер раунда =" + state.round);
      }}
    >
      Next Level
    </button>
  );
};

export default ButtonNextLevel;
