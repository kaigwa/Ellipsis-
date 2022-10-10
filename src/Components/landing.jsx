import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";
import './landing/landing.css'

const Landing = (props) => {
  const navigate = useNavigate();
 
  return (
    <>
      <div>
        <a href="https://ellipsis.co.tz/"><img className='picture' src="./images/Ellipsis logo.png" alt="logo"/></a>
      </div>
      <div className='land'>
            <div className='container'>
              <p className='text'><strong>We TRAIN and,</strong></p> 
              <p>build relationships with upcoming developers</p>
              <p>be a part of our community of developers.</p>
            </div>

            <div className='b'>
              <button className='bn1' onClick={() => navigate("/Dop")}>WHY DOP@E?!</button>
              <button className='bn2' onClick={() => navigate("/Form")}>APPLY NOW!</button>
            </div>
      </div>
          
    
    </>
   
  );
};
 
export default Landing;