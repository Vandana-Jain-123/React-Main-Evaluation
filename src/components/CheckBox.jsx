import React, { useState } from 'react'

export const CheckBox = ({ handleChange, options, correctAns }) => {
  const [option1, option2, option3, option4] = options

  const [selectedValue, setselectedValue] = useState('');
const [show,setShow] = useState(false)
  const handleRadioChange = (event) => {
    setselectedValue(event.target.value);
    handleChange(event.target.value, correctAns)
  };
  const showAnswer = () => {
    setselectedValue(correctAns)
    setShow(!show)
  }
  return (
    <div>
      <input value={option1} name={option1} type="radio" onChange={handleRadioChange}
        checked={selectedValue === option1} /> {option1}
      <br />
      <input value={option2} name={option2} type="radio" onChange={handleRadioChange} checked={selectedValue === option2} /> {option2}
      <br />
      <input value={option3} name={option3} type="radio" onChange={handleRadioChange} checked={selectedValue === option3} /> {option3}
      <br />
      <input value={option4} name={option4} type="radio" onChange={handleRadioChange} checked={selectedValue === option4} /> {option4}
      <br />
     <button onClick={showAnswer}> show </button>
      <div>
        <>
        {show && <p>Incorrect! The correct answer is ${correctAns} </p>  }
        </>
      {/* {``} */}
      </div>
    </div>

  )
}
