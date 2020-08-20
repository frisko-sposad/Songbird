import React from 'react';
import style from './Answers.module.css';
import birdsData from '../birdsData';
import state from '../state';

const Answers = (props) => {
  return (
    <div className={style.Answers}>
      <ul className={style.AnswersUl}>
        {birdsData[props.round].map((el) => (
          <li
            key={el.id}
            className={style.OneAnswer}
            onClick={() => {
              console.log(
                'номер элемента = ' +
                  el.id +
                  '   Номер правильного ответа = ' +
                  state.correctAnswer
              );
              if (el.id === state.correctAnswer) {                
                console.log('угадали праивльный ответ');
              }
            }}
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
