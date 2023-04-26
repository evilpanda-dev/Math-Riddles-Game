import React, { useState, useEffect } from 'react';
import ShuffledCards from './ShuffledCards';
import Answer from './Answer';

const Joke = ({ joke, onNextJoke,onPreviousJoke,isFirstJoke,isLastJoke }) => {
  const [letterObjs, setLetterObjs] = useState([]);
  const [shuffledLetterObjs, setShuffledLetterObjs] = useState([]);
  const [isAnswerCorrect,setIsAnswerCorrect] = useState(false)
  const [anotherQuestion,setAnotherQuestion] = useState(false)

  // Initialize letterObjs and shuffledLetterObjs when the component mounts or joke updates
  useEffect(() => {
    setLetterObjs(joke.encodedLetters);
    setShuffledLetterObjs(shuffle(joke.encodedLetters));
    setAnotherQuestion(false)
  }, [joke]);

  useEffect(() => {
    if (isAnswerCorrect){
      setIsAnswerCorrect(true)
    } else{
      setIsAnswerCorrect(false)
    }
  }, [isAnswerCorrect])

  const onAnswerSubmit = (userAnswer, letterObj) => {
    // Check if the user's answer is correct and update the rightAnswer property
    if (parseInt(userAnswer) == letterObj.total) {
      setLetterObjs((prevLetterObjs) =>
        prevLetterObjs.map((obj) =>
          obj.id == letterObj.id ? { ...obj, rightAnswer: true } : obj
        )
      );
      setIsAnswerCorrect(true)
      setShuffledLetterObjs((prevShuffledLetterObjs) =>
        prevShuffledLetterObjs.map((obj) =>
          obj.id == letterObj.id ? { ...obj, rightAnswer: true } : obj
        )
      );
    } else if (parseInt(userAnswer) !== letterObj.total){
      setIsAnswerCorrect(false)
    }
  };
  
  const handleNextJoke = () => {
    onNextJoke();
    setAnotherQuestion(true)
  };
  

  const handlePreviousJoke = () => {
    onPreviousJoke();
    setAnotherQuestion(true)
  };


  const shuffle = (array) => {
    // Fisher-Yates shuffle algorithm implementation
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div className="joke">
      <h2>{joke.question}</h2>
      <Answer encodedLetters={letterObjs} />
      <div>
      <button
        type="button"
        onClick={handlePreviousJoke}
        className={isFirstJoke ? "card-previous-disabled" : "card-previous"}
        disabled = {isFirstJoke}
      >
        Previous
      </button>
      <button
        type="button"
        onClick={handleNextJoke}
        // if the joke is the last one, put disabled class on the button
        className={isLastJoke ? "card-next-disabled" : "card-next"}
        disabled = {isLastJoke || !isAnswerCorrect}
      >
        Next
      </button>
      </div>
      <ShuffledCards
        letterObjs={shuffledLetterObjs}
        onAnswerSubmit={onAnswerSubmit}
        anotherQuestion={anotherQuestion}
      />

    </div>
  );
};

export default Joke;
