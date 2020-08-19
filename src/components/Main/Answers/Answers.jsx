import React from 'react';
import style from './Answers.module.css';
import birdsData from '../birdsData';

const Answers = (props) => {
  return (
    <div className={style.Answers}>
      <ul className={style.AnswersUl}>
        {birdsData[props.round].map((el) => (
          <li
            key={el.id}
            className={style.OneAnswer}
            onClick={() => console.log(el.id)}
          >
            <div className={style.inactive_answer}></div>
            {el.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Answers;
