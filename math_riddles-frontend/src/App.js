import React, { useState, useEffect } from 'react';
import { getAllJokes } from './api/jokeAPI';
import Joke from './components/Joke';
import './styles/App.css';
import DifficultyPicker from './components/DifficultyPicker';

const App = () => {
  const [joke, setJoke] = useState(null);
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);
  const [isFirstJoke, setIsFirstJoke] = useState(false);
  const [isLastJoke, setIsLastJoke] = useState(false);
  const [difficulty, setDifficulty] = useState('easy');
  const [isDifficultyChanged, setIsDifficultyChanged] = useState(false);

  useEffect(() => {
    fetchJoke(difficulty);
    setIsDifficultyChanged(false);
  }, [difficulty]);

  useEffect(() => {
    if (joke && joke.length > 0) {
      setIsFirstJoke(currentJokeIndex === 0);
      setIsLastJoke(currentJokeIndex === joke.length - 1);
    }
  }, [currentJokeIndex, joke]);

  const handleNextJoke = () => {
    const newIndex = currentJokeIndex + 1;
    if (newIndex < joke.length) {
      setCurrentJokeIndex(newIndex);
    }
  };

  const handlePreviousJoke = () => {
    const newIndex = currentJokeIndex - 1;
    if (newIndex >= 0) {
      setCurrentJokeIndex(newIndex);
    }
  };

  const fetchJoke = async (difficulty) => {
    try {
      const jokes = await getAllJokes(difficulty);
      setJoke(jokes);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };

  return (
    <>
      <header className="app-header">
        <h1>Fun Math</h1>
      </header>
      <div className="app">
        <DifficultyPicker onDifficultyChange={setDifficulty} onChange={setIsDifficultyChanged} />
        {joke &&
          <Joke
            joke={joke[currentJokeIndex]}
            onNextJoke={handleNextJoke}
            onPreviousJoke={handlePreviousJoke}
            isFirstJoke={isFirstJoke}
            isLastJoke={isLastJoke}
            difficultyChanged={isDifficultyChanged}
          />}
      </div>
    </>
  );
};

export default App;
