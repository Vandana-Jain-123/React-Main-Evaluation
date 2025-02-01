import React, { useEffect, useState } from 'react'

import { getDataFromApi, baseUrl } from './api'
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
  // "answer": "A mutable object"
  const handleChange = (e) => {
    console.log("e", e);

  }
  return (
    <div>Quiz
      {quizData?.map((item) => {
        const [option1, option2, option3, option4] = item?.options
        return (
          <div key={item?.id}>
            <h3> {item?.question} </h3>
            <CheckBox correctAns={item?.answer} handleChange={handleChange} options={item?.options} />
          </div>
        )

      })}
    </div>
  )
}

export default Quiz