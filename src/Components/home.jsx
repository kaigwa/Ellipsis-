import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";

import './home/home.css'

const Home = (props) => {
  const navigate = useNavigate();
 
  return (
    <>
        <div className='page1'>
          <div className='heading'></div>
          <div className=''>
            <a href="https://ellipsis.co.tz/"><img className='picture' src="./images/Ellipsis logo.png" alt="logo"/></a>
          </div>

          <div className='content'>
            <strong className='software'>We BUILD SOFTWARE that</strong>
            <strong className='work'>works.</strong>
            <p>Make an impact on your business, startup or organzation with us, start</p> 
            <p>with a <strong>14 days FREE TRIAL</strong> & zero commitment.</p><br />
          </div>

          <div className='b2'>
            <button className='bn' onClick={() => navigate("/")}>Join Our Team</button>
            <button className='bn0' onClick={() => navigate("/")}>Book an Appointment</button>
        </div>
        </div><br />


        <div className='page2'>
          <div>
            <a href="https://ellipsis.co.tz/"><img className='picture' src="./images/Ellipsis logo.png" alt="logo"/></a>
          </div>

          <div className='container'>
            <p className='text'><strong>We TRAIN and,</strong></p> 
            <p className='upcoming'>build relationships with upcoming developers</p>
            <p className='part'>be a part of our community of developers.</p>
          </div>

          <div className='b'>
            <button className='bn1' onClick={() => navigate("/Dop")}>WHY DOP@E?!</button>
            <button className='bn2' onClick={() => navigate("/Form")}>APPLY NOW!</button>
          </div>
      
        </div>
      
    </>
    

    
   
  );
};
 
export default Home;