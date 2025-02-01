import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Login from './components/Login';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home/> */}
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>

    </>
    
  );
};

export default App;

