import React, { useState, useEffect } from 'react';
import { getAllJokes,getJokeById } from './api/jokeAPI';
import Settings from './components/Settings';
import Joke from './components/Joke';
import './App.css';

const App = () => {
  const [joke, setJoke] = useState(null);
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);
  // const [settings, setSettings] = useState({
  //   operation: 'addition',
  //   numberRange: [1, 100],
  // });
  const [isFirstJoke, setIsFirstJoke] = useState(false);
  const [isLastJoke, setIsLastJoke] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchJoke();
  }, []);

  useEffect(() => {
    // if (currentJokeIndex == 1) {
    //   setIsFirstJoke(true);
    // } else {
    //   setIsFirstJoke(false);
    // }
    if (joke && joke.length > 0){
      setIsFirstJoke(currentJokeIndex === 0);
     setIsLastJoke(currentJokeIndex === joke.length - 1);
    }
  }, [currentJokeIndex, joke]);
  
  useEffect(() => {
    if(error) {
      setIsLastJoke(true);
    }
  }, [error])

  
  const handleNextJoke = () => {
    // const newIndex = currentJokeIndex + 1;
    // setCurrentJokeIndex(newIndex);
    // fetchJoke();
    const newIndex = currentJokeIndex + 1;
    if (newIndex < joke.length) {
      setCurrentJokeIndex(newIndex);
    }
  };
  
  const handlePreviousJoke = () => {
    // const newIndex = currentJokeIndex - 1;
    // setCurrentJokeIndex(newIndex);
    // fetchJoke();
    const newIndex = currentJokeIndex - 1;
    if (newIndex >= 0) {
      setCurrentJokeIndex(newIndex);
    }
  };
  // console.log(joke.length)

  const fetchJoke = async () => {
    // try {
    //   const jokes = await getJokeById(currentJokeIndex);
    //   // const randomIndex = Math.floor(Math.random() * jokes.length);
    //   setJoke(jokes);
    //   // console.log(jokes)
    //   // console.log(jokes)
    //   // setCurrentJokeIndex(0); // reset currentJokeIndex to 0 when new jokes are fetched
    // } catch (error) {
    //   setError(error);
    //   console.error('Error fetching jokes:', error);
    // }
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

  


  return (
    <>
    <header className="app-header">
    <h1>Fun Math</h1>
    </header>
    <div className="app">
      {/* <Settings onChange={handleSettingsChange} /> */}
      {joke && <Joke joke={joke[currentJokeIndex]} onNextJoke={handleNextJoke} onPreviousJoke={handlePreviousJoke} isFirstJoke ={isFirstJoke} isLastJoke={isLastJoke}/>
}
    </div>
    </>
  );
};

export default App;
