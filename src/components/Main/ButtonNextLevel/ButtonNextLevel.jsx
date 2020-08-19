import React from 'react';
import style from './ButtonNextLevel.module.css';

const ButtonNextLevel = () => {
  return <button className={style.ButtonNextLevel} onClick={()=> console.log("Работает")}>Next Level</button>;
};

export default ButtonNextLevel;
