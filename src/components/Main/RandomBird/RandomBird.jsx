import React from 'react';
import style from './RandomBird.module.css';
import RandomBirdImg from './RandomBirdImg.jpg';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import BirdDate from '../birdsData';

const RandomBird = (props) => {
  let birdImg;
  let birdName;
  if (props.showBird === false) {
    birdImg = RandomBirdImg;
    birdName = '******';
  } else {
    birdImg = BirdDate[props.round][props.correctAnswer].image;
    birdName = BirdDate[props.round][props.correctAnswer].name;
  }
  return (
    <div className={style.RandomBird}>
      <img className={style.RandomBirdImg} src={birdImg} alt="" />
      <div className={style.RandomBirdContainer}>
        <div className={style.RandomBirdName}>{birdName}</div>
        <AudioPlayer
          className={style.AydioPlayer}
          autoPlayAfterSrcChange={false}
          layout="horizontal-reverse"
          customAdditionalControls={[]}
          showJumpControls={false}
          src={BirdDate[props.round][props.correctAnswer].audio}
        />
      </div>
    </div>
  );
};

export default RandomBird;
