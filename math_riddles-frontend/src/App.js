import React, { useState, useEffect } from 'react';
import { getAllJokes } from './api/jokeAPI';
import Settings from './components/Settings';
import Joke from './components/Joke';
import './App.css';

const App = () => {
  const [joke, setJoke] = useState(null);
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);
  const [settings, setSettings] = useState({
    operation: 'addition',
    numberRange: [1, 100],
  });
  const [isFirstJoke, setIsFirstJoke] = useState(false);
  const [isLastJoke, setIsLastJoke] = useState(false);

  useEffect(() => {
    fetchJoke();
  }, [settings]);

  useEffect(() => {
    if (joke && joke.length > 0){
      setIsFirstJoke(currentJokeIndex === 0);
     setIsLastJoke(currentJokeIndex === joke.length - 1);
    }
  }, [currentJokeIndex]);
  
  
  const fetchJoke = async () => {
    try {
      const jokes = await getAllJokes();
      const randomIndex = Math.floor(Math.random() * jokes.length);
      setJoke(jokes);
      // console.log(jokes)
      // setCurrentJokeIndex(0); // reset currentJokeIndex to 0 when new jokes are fetched
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };

  const handleSettingsChange = (newSettings) => {
    setSettings(newSettings);
  };



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
  // console.log(joke.length)


  return (
    <>
    <header className="app-header">
    <h1>Fun Math</h1>
    </header>
    <div className="app">
      {/* <Settings onChange={handleSettingsChange} /> */}
      {joke && <Joke joke={joke[currentJokeIndex]} settings={settings} onNextJoke={handleNextJoke} onPreviousJoke={handlePreviousJoke} isFirstJoke ={isFirstJoke} isLastJoke={isLastJoke}/>
}
    </div>
    </>
  );
};

export default App;
