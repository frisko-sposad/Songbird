import React from 'react';
import style from './OneAnswer.module.css';

const OneAnswer = (props) => {
  return (
    <li className={style.OneAnswer}>
      <div className={style.inactive_answer}></div>{props.answer}
      
    </li>
  );
};

export default OneAnswer;
