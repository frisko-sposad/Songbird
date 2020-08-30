import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import state from './components/Main/state';
import BirdDate from '../src/components/Main/birdsData';
import styleIco from './components/Main/Answers/Answers.module.css';

function App(props) {
  const [round, setRound] = useState(0);
  function nextRound() {
    setRound(round + 1);    
  }
  function NewGameRound() {
    setRound(0);
    console.log(`должен быть 0, а у нас = ${round}`);    
  }

  const [colorCorrectIco, setcolorCorrectIco] = useState(
    styleIco.correct_answer
  );
  const [colorInCorrectIco, setcolorInCorrectIco] = useState(
    styleIco.incorrect_answer
  );

  const [answerArr, setAnswerArr] = useState(BirdDate[round].map((el) => el));

  const [point, setPoint] = useState(5);
  function decreasePoints() {
    setPoint(point - 1);
  }
  function restorePoints() {
    setPoint(5);
  }

  const [totalScores, setTotalScores] = useState(0);
  function calculateTotalScores() {
    setTotalScores(totalScores + point);
  }
  function NewGameScore() {
    setTotalScores(0);
  }

  const [showBird, setShowBird] = useState(false);
  function openBird() {
    setShowBird(true);
  }
  function closeBird() {
    setShowBird(false);
  }

  const [endGame, setEndGame] = useState(false);
  function GameOver() {
    setEndGame(true);
    NewGameRound();
  }
  function NewGame() {
    setEndGame(false);
    closeBird();
    setAnswerArr(BirdDate[0].map((el) => el));    
  }

  const [birdInfoItem, setBirdInfoItem] = useState('');
  function showBirdInfo() {
    setBirdInfoItem(state.activBirdItem);
  }

  const [correctAnswer, setCorrectAnswer] = useState(
    Math.floor(Math.random() * 6)
  );
  function newCorrectAnswer() {
    setCorrectAnswer(Math.floor(Math.random() * 6));
  }

  return (
    <div className="App">
      <Header
        state={state}
        round={round}
        point={point}
        totalScores={totalScores}
      />
      <Main
        colorCorrectIco={colorCorrectIco}
        setcolorCorrectIco={setcolorCorrectIco}
        colorInCorrectIco={colorInCorrectIco}
        setcolorInCorrectIco={setcolorInCorrectIco}
        answerArr={answerArr}
        setAnswerArr={setAnswerArr}
        totalScores={totalScores}
        state={state}
        round={round}
        nextRound={nextRound}
        correctAnswer={correctAnswer}
        newCorrectAnswer={newCorrectAnswer}
        birdInfoItem={birdInfoItem}
        showBirdInfo={showBirdInfo}
        decreasePoints={decreasePoints}
        restorePoints={restorePoints}
        calculateTotalScores={calculateTotalScores}
        showBird={showBird}
        openBird={openBird}
        closeBird={closeBird}
        endGame={endGame}
        GameOver={GameOver}
        NewGame={NewGame}
        NewGameRound={NewGameRound}
        NewGameScore={NewGameScore}
      />
    </div>
  );
}

export default App;
