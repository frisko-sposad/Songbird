import React from 'react';
import style from './RandomBird.module.css';
import RandomBirdImg from './RandomBirdImg.jpg';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import audio from './Малыш.mp3';

const RandomBird = () => {
  return (
    <div className={style.RandomBird}>
      <img className={style.RandomBirdImg} src={RandomBirdImg} alt="" />
      <div className={style.RandomBirdContainer}>
        <div className={style.RandomBirdName}>проигрыватель</div>
        <AudioPlayer          
          className={style.AydioPlayer}
          layout="horizontal-reverse"
          customAdditionalControls={[]}
          showJumpControls={false}
          src={audio}
          onPlay={(e) => console.log('onPlay')}
        />
      </div>
    </div>
  );
};


export default RandomBird;
