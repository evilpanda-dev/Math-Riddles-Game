import { useState, useEffect } from 'react';


const Timer = ({ delay, onTimeUp, startTimer, resetTimer,style }) => {
    const [timeLeft, setTimeLeft] = useState(delay);
  
    useEffect(() => {
      if (resetTimer) {
        setTimeLeft(delay);
      }
    }, [resetTimer, delay]);
  
    useEffect(() => {
      if (startTimer && timeLeft > 0) {
        const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timerId);
      } else if (timeLeft === 0) {
        onTimeUp();
      }
    }, [timeLeft, onTimeUp, startTimer]);
  
    return (
        <div style={style}>
        Time left: {timeLeft} seconds
      </div>
    );
  };

export default Timer;