import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/result.css"

const Result = () => {


 


  return (
    <div className="result">
      <h1>Quiz Results</h1>
      <h2 style={{ marginTop: "100px", marginLeft: "50px", color: "green" }}> Correct Answer <span style={{ color: "green", fontSize: "30px" }} >2</span> out of <span style={{color:"red" , fontSize:"30px"}} >13</span>  </h2>
      
    </div>
  );
};

export default Result;
