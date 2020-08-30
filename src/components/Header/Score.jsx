import React from 'react';
import style from './Header.module.css';

const Score = (props) => {
  return <div className={style.score}>Score: {props.totalScores}</div>;
};

export default Score;
