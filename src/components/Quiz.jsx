import React, { useEffect, useState } from 'react'
import "../styles/quiz.css"

import { getDataFromApi, baseUrl } from './api'
import {Link} from "react-router-dom"
import { CheckBox } from './CheckBox';

const Quiz = () => {
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    getQuiz()
  }, [])

  const getQuiz = () => {
    getDataFromApi(`${baseUrl}/questions`).then((result) => {
      console.log("result is ", result?.questions);
      setQuizData([...result?.questions])
    })
  }

  const hadnleQuiz = (e, selectedData, id) => {
    const val = e.target.checked
    const updatedData = quizData?.map((item) => id == item?.id ? { ...item, selectedVal: val } : item);
    // setQuizData([...updatedData])
    console.log("value", e.target.checked, '\nselectedData', selectedData, '\n updatedData', updatedData);
  }

  const options = [
    "A function",
    "A mutable object",
    "A state variable",
    "A React component"
  ]
 
  const handleChange = (e) => {
    console.log("e", e);

  }
  return (
    <div className='quiz-box'>
    <h1>Quiz Test</h1>

      {quizData?.map((item) => {
        const [option1, option2, option3, option4] = item?.options
        return (
          <div key={item?.id} className='quiz-option'>
            <h3 style={{ color:"darkblue" }}>Q. {item?.question} </h3>
            <CheckBox correctAns={item?.answer} handleChange={handleChange} options={item?.options} />
          </div>
        )

      })}

      <button style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        padding: "10px 20px",
        background: "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}
  
      >
        <Link style={{color:"white", textDecoration:"none"}}to="/result">Submit Quiz</Link>
      
      </button>
    </div>
  )
    }

export default Quiz