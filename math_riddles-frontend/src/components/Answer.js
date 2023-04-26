import React,{useEffect,useState} from 'react';
import Letter from './Letter';

const Answer = ({ encodedLetters }) => {
    return (
      <div className="answer-container">
        {encodedLetters &&
          encodedLetters.map((letterObj) => (
            <Letter key={letterObj.id} letterObj={letterObj} />
          ))}
      </div>
    );
  };
  

export default Answer;
