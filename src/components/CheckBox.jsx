
import React, { useState } from 'react';

export const CheckBox = ({ handleChange, options, correctAns }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [showFeedback, setShowFeedback] = useState(false); 
  const [isCorrect, setIsCorrect] = useState(false); 

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    setIsCorrect(value === correctAns);
    setShowFeedback(false); 
    handleChange(value, correctAns);
  };

  const showCorrectAnswer = () => {
    setShowFeedback(true); 
  };

  return (
    <div>
      {options.map((option, index) => (
        <div key={index}>
          <input
            value={option}
            name="quiz-option"
            type="radio"
            onChange={handleRadioChange}
            checked={selectedValue === option}
          />{' '}
          {option}
        </div>
      ))}
      <button
        style={{
          width: '150px',
          backgroundColor: 'blue',
          color: 'white',
          fontSize: '17px',
          border: 'none',
          marginTop: '10px',
        }}
        onClick={showCorrectAnswer}
      >
        Show Answer
      </button>
      <div>
        {showFeedback && (
          <p>
            {isCorrect ? (
              <span style={{ color: 'green', fontSize: '20px', fontWeight: 'bold' }}>
                Correct!
              </span>
            ) : (
              <span style={{ color: 'red', fontSize: '20px', fontWeight: 'bold' }}>
                Incorrect! The correct answer is{' '}
                <span style={{ color: 'green', fontSize: '20px', fontWeight: 'bold' }}>
                  "{correctAns}"
                </span>
              </span>
            )}
          </p>
        )}
      </div>
    </div>
  );
};


