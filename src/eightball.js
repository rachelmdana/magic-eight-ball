import React, { useState } from 'react';

const EightBall = ({ answers }) => {
  const [currentColor, setCurrentColor] = useState('black');
  const [currentMessage, setCurrentMessage] = useState('Think of a Question');
  const [colorCounts, setColorCounts] = useState({
    green: 0,
    goldenrod: 0,
    red: 0,
  });

  const getRandomAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const { msg, color } = answers[randomIndex];
    setCurrentMessage(msg);
    setCurrentColor(color);
    setColorCounts((prevCounts) => ({
      ...prevCounts,
      [color]: prevCounts[color] + 1,
    }));
  };

  const resetEightBall = () => {
    setCurrentMessage('Think of a Question');
    setCurrentColor('black');
  };

  return (
    <div className="eight-ball-container">
      <div className="eight-ball" style={{ backgroundColor: currentColor }} onClick={getRandomAnswer}>
        {currentMessage}
      </div>
      <div className="controls-container">
        <button className="reset-button" onClick={resetEightBall}>
          Reset
        </button>
        <div className="record-keeping">
          Green: {colorCounts.green} | Goldenrod: {colorCounts.goldenrod} | Red: {colorCounts.red}
        </div>
      </div>
    </div>
  );
};

export default EightBall;