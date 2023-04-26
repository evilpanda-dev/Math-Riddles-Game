import React, { useEffect, useState } from 'react';
import correctSound from '../assets/sounds/correct.mp3';
import incorrectSound from '../assets/sounds/incorrect.mp3';

const correctSoundEffect = new Audio(correctSound);
// const incorrectSoundEffect = new Audio(incorrectSound);


const Card = ({ letterObj, settings, onAnswerSubmit,onNextJoke,onPreviousJoke}) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [incorrectSoundEffect, setIncorrectSoundEffect] = useState(null);

  useEffect(() => {
    if (letterObj.rightAnswer == true) {
      setIsCorrect(true);
    } else if (letterObj.rightAnswer === 'false') {
      setIsCorrect(false);
    }
  }, [letterObj.rightAnswer,isCorrect]);

  useEffect(()=>{
    if(isSubmited && isCorrect == true){
      correctSoundEffect.play();
    } else if(isSubmited && isCorrect == false && incorrectSoundEffect){
      incorrectSoundEffect.play();
    }
  },[isSubmited,isCorrect,incorrectSoundEffect])

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswerSubmit(userAnswer, letterObj);
    setUserAnswer('');
    setIsSubmited(true)
    if (isCorrect == false) {
      setIncorrectSoundEffect(new Audio(incorrectSound));
    }
  };
  


// // console.log(letterObj.rightAnswer)
//   const isCorrect = Boolean(letterObj.rightAnswer);
// console.log(letterObj)
  return (
    //Add correct classname if isCorrect is true,incorrect if isIncorrect true and by default ""
<div className={`card-container ${isSubmited && (isCorrect ? "correct" : "incorrect")}`}>
      <h5>{letterObj.letter}</h5>
      <h6>{`${letterObj.max} ${letterObj.sign} ${letterObj.min}`}</h6>
      <form onSubmit={handleSubmit} className="card-form">
      <div className="input-wrapper">
        <input
          type="number"
          value={userAnswer}
          onChange={handleInputChange}
          disabled={isCorrect}
          className="card-input"
        />
        <div className="underline"></div>
      </div>
      <button
        type="submit"
        disabled={isCorrect}
        className={`card-submit ${isCorrect ? "disabled" : ""}`}
      >
        Check
      </button>
    </form>
    </div>
  );
};

export default Card;
