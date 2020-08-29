import React from 'react';
import style from './Answers.module.css';
import correctAnswermp3 from './correctAnswer.mp3';
import incorrectAnswermp3 from './incorrectAnswer.mp3';
import state from '../state';

function handleClick(item, index, correctAnswer, props) {
  state.activBirdItem = index;
  props.showBirdInfo();
  state.birdInfoState = true;
  if (state.win === false) {
    correctAnswer === index
      ? acceptAnswer(
          item,
          item.children[0],
          item.children[1],
          props.round,
          props.calculateTotalScores,
          props.openBird,
          props.colorCorrectIco
        )
      : rejectAnswer(
          item,
          item.children[0],
          item.children[1],
          props.decreasePoints,
          props.colorInCorrectIco
        );
  }
}

const acceptAnswer = (
  item,
  icon,
  audio,
  round,
  calculateTotalScores,
  openBird,
  colorCorrectIco
) => {
  audio.src = correctAnswermp3;
  audio.play();
  icon.className = colorCorrectIco;
  if (round <= 5) state.nextLevelButton = true;
  calculateTotalScores();
  openBird();
  state.win = true;
};

const rejectAnswer = (item, icon, audio, decreasePoints, colorInCorrectIco) => {
  audio.src = incorrectAnswermp3;
  audio.play();
  icon.className = colorInCorrectIco;
  decreasePoints();
};

const Answers = (props) => {
  console.log(`Правильный ответ: ${props.correctAnswer + 1}`);
  const answerList = props.answerArr.map((el, index) => {
    
    return (
      <li
        key={index}
        className={style.answerItem}
        onClick={(elem) =>
          handleClick(elem.target, index, props.correctAnswer, props)
        }
      >
        <div id={'ico' + index} className={style.inactive_answer}></div>
        {el.name}
        <audio />
      </li>
    );
  });
  return (
    <div className={style.Answers}>
      <ul className={style.AnswersUl}>{answerList}</ul>
    </div>
  );
};


export default Answers;
