import React from 'react';
import style from './BirdInfo.module.css';
import AudioPlayer from 'react-h5-audio-player';
import BirdDate from '../birdsData';
import state from "../state"

const BirdInfo = (props) => {
  const bird = BirdDate[props.round][props.birdInfoItem];

  if (state.birdInfoState === false) {
    return (
      <div className={style.BirdInfo}>
        <p className={style.instruction}>
          Послушайте плеер. Выберите птицу из списка
        </p>
      </div>
    );
  } else {
    return (
      <div className={style.BirdInfo}>
        <div className={style.birdInfoContainer}>
          <img className={style.RandomBirdImg} src={bird.image} alt="" />
          <ul className={style.birdName}>
            <li>
              <h4>{bird.name}</h4>
            </li>
            <li>
              <span>{bird.species}</span>
            </li>
            <li>
              <AudioPlayer
                className={style.AydioPlayer}
                autoPlayAfterSrcChange={false}
                layout="horizontal-reverse"
                customAdditionalControls={[]}
                showJumpControls={false}
                src={bird.audio}
                onPlay={() => console.log('onPlay')}
              />
            </li>
          </ul>
        </div>
        <div className={style.birdDescription}>{bird.description}</div>
      </div>
    );
  }

  // return (
  //   <div className={style.BirdInfo}>
  //     {info}

  //   </div>
  // );
};

export default BirdInfo;
