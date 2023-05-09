import React, { useState, useEffect } from 'react';
import ShuffledCards from './ShuffledCards';
import Answer from './Answer';
import Timer from './Timer';
import Modal from 'react-modal';
import { shuffle } from '../actions/shuffle';

Modal.setAppElement('#root');

const Joke = ({ joke, onNextJoke, onPreviousJoke, isFirstJoke, isLastJoke }) => {
  const [letterObjs, setLetterObjs] = useState([]);
  const [shuffledLetterObjs, setShuffledLetterObjs] = useState([]);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)
  const [anotherQuestion, setAnotherQuestion] = useState(false)
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);

  // Initialize letterObjs and shuffledLetterObjs when the component mounts or joke updates
  useEffect(() => {
    setLetterObjs(joke.encodedLetters);
    setShuffledLetterObjs(shuffle(joke.encodedLetters));
    setAnotherQuestion(false)
  }, [joke]);

  useEffect(() => {
    if (isAnswerCorrect) {
      setIsAnswerCorrect(true)
    } else {
      setIsAnswerCorrect(false)
    }
  }, [isAnswerCorrect])

  const handleTimeUp = () => {
    setIsModalOpen(true);
    setStartTimer(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setResetTimer(true);
  };

  const handleStartTimer = () => {
    setStartTimer(true);
    setResetTimer(false);
  };

  const onAnswerSubmit = (userAnswer, letterObj) => {
    // Check if the user's answer is correct and update the rightAnswer property
    if (parseInt(userAnswer) == letterObj.total) {
      setLetterObjs((prevLetterObjs) =>
        prevLetterObjs.map((obj) =>
          obj.id == letterObj.id ? { ...obj, rightAnswer: true } : obj
        )
      );
      setIsAnswerCorrect(true)
      setQuestionsAnswered(questionsAnswered + 1);
      setShuffledLetterObjs((prevShuffledLetterObjs) =>
        prevShuffledLetterObjs.map((obj) =>
          obj.id == letterObj.id ? { ...obj, rightAnswer: true } : obj
        )
      );
    } else if (parseInt(userAnswer) !== letterObj.total) {
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


  return (
    <div className="joke">
      <Timer
        delay={30}
        onTimeUp={handleTimeUp}
        startTimer={startTimer}
        resetTimer={resetTimer}
        style={styles.timer}
      />
      {!startTimer && (
        <button style={styles.startButton} onClick={handleStartTimer}>
          Start Timer</button>
      )}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Time's Up"
        style={customStyles}
      >
        <h2>Time's up!</h2>
        <p>You answered {questionsAnswered} math questions.</p>
        <button style={customStyles.closeButton} onClick={closeModal}>
          Close
        </button>
      </Modal>
      <h2>{joke.question}</h2>
      <Answer encodedLetters={letterObjs} />
      <div>
        <button
          type="button"
          onClick={handlePreviousJoke}
          className={isFirstJoke ? "card-previous-disabled" : "card-previous"}
          disabled={isFirstJoke}
        >
          Previous
        </button>
        <button
          type="button"
          onClick={handleNextJoke}
          className={isLastJoke ? "card-next-disabled" : "card-next"}
          disabled={isLastJoke || !isAnswerCorrect}
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

// Custom styles for the modal
const customStyles = {
  content: {
    width: '300px',
    height: '200px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
    backgroundColor: '#f0f2f5',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    cursor: 'pointer',
    backgroundColor: '#3498db',
    color: 'white',
    borderRadius: '5px',
    border: 'none',
    padding: '8px 16px',
    fontSize: '14px',
  },
};

const styles = {
  timer: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#3498db',
  },
  startButton: {
    cursor: 'pointer',
    backgroundColor: '#3498db',
    color: 'white',
    borderRadius: '5px',
    border: 'none',
    padding: '8px 16px',
    fontSize: '14px',
    marginTop: '10px',
  },
};

