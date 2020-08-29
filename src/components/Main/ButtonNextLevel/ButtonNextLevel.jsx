import React from 'react';
import style from './ButtonNextLevel.module.css';
import state from '../state';
import BirdDate from '../birdsData';
import styleIco from '../Answers/Answers.module.css';

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
          state.birdInfoState = false;
          props.setAnswerArr(BirdDate[props.round + 1].map((el) => el));
          // снимаем красные и зелёные метки с ответов
          for (let i = 0; i < 6; i++) {
            document.getElementById(`ico${i}`).className =
              styleIco.inactive_answer;
          }          
        }

        if (props.round >= 5 && state.nextLevelButton === true) {
          props.closeBird();
          props.GameOver();
          props.NewGameRound();
          props.newCorrectAnswer();          
          props.restorePoints();
          props.closeBird();
          state.win = false;
          state.birdInfoState = false;
        }
      }}
    >
      Next Level
    </button>
  );
};

export default ButtonNextLevel;
