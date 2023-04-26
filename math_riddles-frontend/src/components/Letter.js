import React, { useEffect, useState } from 'react';
import '../styles/Letter.css'

const Letter = ({ letterObj }) => {
  const [checkAnswer, setAnswer] = useState('')
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    if (letterObj.rightAnswer == true) {
      setAnswer('invisible')
    } else if (letterObj.rightAnswer == 'false') {
      setAnswer('visible')
    }
  }, [letterObj.rightAnswer, checkAnswer])

  useEffect(() => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 50) + 50;
    const lightness = Math.floor(Math.random() * 40) + 60;
    setBackgroundColor(`hsl(${hue}, ${saturation}%, ${lightness}%)`);
  }, []);

  return (
    <div className={`letter-container`}>
      <span
        className='letter'
        style={{ backgroundColor }}>
        {checkAnswer == 'invisible' ? letterObj.letter : ' '}
      </span>
      <span className='letter-total'>{letterObj.total}</span>
    </div>
  );
};

export default Letter;
