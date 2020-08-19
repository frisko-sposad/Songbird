import React from 'react';
import style from './BirdInfo.module.css';
import AudioPlayer from 'react-h5-audio-player';
import audio from '../RandomBird/Малыш.mp3';
import BirdDate from '../birdsData';

const BirdInfo = () => {
  return (
    <div className={style.BirdInfo}>
      <p className={style.instruction}>
        Послушайте плеер. Выберите птицу из списка
      </p>
      <div className={style.birdInfoContainer}>
        <img
          className={style.RandomBirdImg}
          src={BirdDate[0][0].image}
          alt=""
        />
        <ul className={style.birdName}>
          <li>
            <h4>{BirdDate[0][0].name}</h4>
          </li>
          <li>
            <span>{BirdDate[0][0].species}</span>
          </li>
          <li>
            <AudioPlayer
              className={style.AydioPlayer}
              layout="horizontal-reverse"
              customAdditionalControls={[]}
              showJumpControls={false}
              src={audio}
              onPlay={(e) => console.log('onPlay')}
            />
          </li>
        </ul>
      </div>
      <div className={style.birdDescription}>{BirdDate[0][0].description}</div>
    </div>
  );
};

export default BirdInfo;
