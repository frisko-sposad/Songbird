import React from 'react';
import style from './EndGame.module.css';

const EndGame = (props) => {
  const newGameClick = () => {
    props.NewGame();
    props.NewGameRound();
    props.NewGameScore();
  };

  return (
    <div className={style.EndGame}>
      <h2 className={style.h2}>Конец игры</h2>
      <span>Поздравляем вы набрали {props.totalScores} очков из 30</span>
      <button className={style.ButtonNewGame} href="#" onClick={() => newGameClick()}>
        New Game
      </button>
    </div>
  );
};

export default EndGame;
