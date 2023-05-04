import React from 'react';
import Card from './Card';

const ShuffledCards = ({ letterObjs, onAnswerSubmit, anotherQuestion }) => {
  return (
    <div className="shuffled-cards-container">
      {letterObjs.map((letterObj) => (
        <Card
          key={letterObj.id}
          letterObj={letterObj}
          onAnswerSubmit={onAnswerSubmit}
          anotherQuestion={anotherQuestion}
        />
      ))}
    </div>
  );
};

export default ShuffledCards;
