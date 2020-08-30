import React from 'react';
import style from './EndGame.module.css';
import state from '../state'

const EndGame = (props) => {
  const newGameClick = () => {
    props.NewGameRound();
    props.NewGame();    
    props.NewGameScore();
    props.closeBird();
    state.nextLevelButton = false;
    
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
