import React, { useEffect } from 'react';
import Card from './Card';

const ShuffledCards = ({ letterObjs, settings, onAnswerSubmit}) => {
  return (
    <div className="shuffled-cards-container">

      {letterObjs.map((letterObj) => (
        <Card
          key={letterObj.id}
          letterObj={letterObj}
          settings={settings}
          onAnswerSubmit={onAnswerSubmit}
        />
      ))}


    </div>
  );
};

export default ShuffledCards;
