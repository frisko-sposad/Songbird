import React from 'react';
import style from './Main.module.css';
import RandomBird from './RandomBird/RandomBird';
import Answers from './Answers/Answers';
import BirdInfo from './BirdInfo/BirdInfo';
import ButtonNextLevel from './ButtonNextLevel/ButtonNextLevel';
import EndGame from './EndGame/EndGame';

const Main = (props) => {
  if (props.endGame === true) {
    return (
      <main>
        <EndGame
          NewGame={props.NewGame}
          NewGameRound={props.NewGameRound}
          NewGameScore={props.NewGameScore}
          totalScores={props.totalScores}
        />
      </main>
    );
  } else {
    return (
      <main className={style.main}>
        <RandomBird
          round={props.round}
          correctAnswer={props.correctAnswer}
          birdInfoItem={props.birdInfoItem}
          showBird={props.showBird}
        />
        <div className={style.container_main}>
          <Answers
            state={props.state}
            round={props.round}
            correctAnswer={props.correctAnswer}
            showBirdInfo={props.showBirdInfo}
            decreasePoints={props.decreasePoints}
            calculateTotalScores={props.calculateTotalScores}
            openBird={props.openBird}
          />
          <BirdInfo
            round={props.round}
            correctAnswer={props.correctAnswer}
            birdInfoItem={props.birdInfoItem}
          />
        </div>
        <ButtonNextLevel
          round={props.round}
          nextRound={props.nextRound}
          newCorrectAnswer={props.newCorrectAnswer}
          restorePoints={props.restorePoints}
          closeBird={props.closeBird}
          GameOver={props.GameOver}
        />
      </main>
    );
  }
};

export default Main;
