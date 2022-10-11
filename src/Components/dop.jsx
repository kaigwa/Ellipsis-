import React, { Component } from 'react';
// import {ImageBackground, View} from 'react';
import { useNavigate } from "react-router-dom";
import './dop/dop.css';
import { Link } from "react-router-dom"

const Dop = (props) => {
    const navigate = useNavigate(); 
    return (
      
      <>
      <div className='dp' style ={ {backgroundImage: "url('./images/dope.jpg')"}}>
        <nav className='nav'>
          <div className='logo'>
          <a className='remove-link' href="https://ellipsis.co.tz"><h1><span className='neno'>DOP</span><span><img className='nembo' src="./images/Ellipsis logo 2.png"/></span><span className='e'>E</span></h1></a>
          </div>
          
            <ul>
              <div className='dropdown'>
                <li><button className='bar'>About</button></li>
                <div className='dropdown-content'>
                    <a href="">About DOP@E</a>
                    <a href="">Why DOP@E</a>
                    <a href="">Achievements</a>
                </div>
              </div>
              
              <div className='dropdown'>
                <li><button className='bar'>Programs</button></li>
                <div className='dropdown-content'>
                    <a href="">Courses</a>
                    <a href="">Schedule</a>
                </div>
              </div>
             
             <div className='dropdown'>
              <li><button className='bar'>Initiators</button></li>
             </div>
              
              <div className='dropdown'>
                <li><button className='bar'>Contact Us</button></li>
              </div>
              
            </ul>
        </nav>
        
        <div className='dope'>
            <p className='para'><strong className='dev'>Developers </strong><br /><strong className='reach'>Outreach Program </strong><br /><span className='code'>The Best Coding Training Program In</span><br /><span className='tz'>Tanzania</span></p>
      
            <div className='an'>
                <button className='btn3' onClick={() => navigate("/Form")}>APPLY NOW!</button>
            </div>
            
          </div>
      </div>
      </>
     
       
     
    )
  
  }
 
export default Dop;

