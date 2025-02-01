import React from 'react'

import {Link}from "react-router-dom"
import  {useNavigate} from "react-router-dom"
import "../styles/home.css"
import Result from './Result'

const Home = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className="home">
     
       
        <h1>Welcome To the Quiz App !</h1>
        <h3>Rwst your Knowledge and challemge yourself with our quiz.Please <Link to="/login">Login</Link></h3>

      </div>
    </>
    
  )
}

export default Home
