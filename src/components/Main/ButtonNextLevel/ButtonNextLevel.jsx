import React from 'react';
import style from './ButtonNextLevel.module.css';
import state from '../state';

const ButtonNextLevel = (props) => {
  let styleButton = style.ButtonNextLevel;
  if (state.nextLevelButton === true) {
    styleButton += ' ' + style.ButtonActive;
  }

  return (
    <button
      className={styleButton}
      onClick={() => {
        if (props.round < 5 && state.nextLevelButton === true) {
          props.nextRound();
          props.newCorrectAnswer();
          state.nextLevelButton = false;
          props.restorePoints();
          props.closeBird();
          state.win = false;
        }
        if (props.round >= 5 && state.nextLevelButton === true) {
          props.GameOver();
        }
      }}
    >
      Next Level
    </button>
  );
};

export default ButtonNextLevel;
