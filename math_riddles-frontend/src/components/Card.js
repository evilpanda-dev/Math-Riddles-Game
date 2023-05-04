import React, { useEffect, useState } from 'react';
import correctSound from '../assets/sounds/correct.mp3';
import incorrectSound from '../assets/sounds/incorrect.mp3';

const correctSoundEffect = new Audio(correctSound);

const Card = ({ letterObj, onAnswerSubmit, anotherQuestion }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const [incorrectSoundEffect, setIncorrectSoundEffect] = useState(null);

  useEffect(() => {
    if (anotherQuestion) {
      setIsCorrect(false);
      setIsSubmited(false);
      setIncorrectSoundEffect(null);
      setUserAnswer('');
    }
  }, [anotherQuestion]);

  useEffect(() => {
    if (letterObj.rightAnswer == true) {
      setIsCorrect(true);
      correctSoundEffect.play();
    } else if (letterObj.rightAnswer !== true) {
      setIncorrectSoundEffect(new Audio(incorrectSound));
      setIsCorrect(false);
      if (incorrectSoundEffect)
        incorrectSoundEffect.play();
    }
  }, [letterObj.rightAnswer, isSubmited]);

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswerSubmit(userAnswer, letterObj);
    setUserAnswer('');
    setIsSubmited(true);
  };

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
