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
                <li><button className='bar'>DOP@E</button></li>
                <div className='dropdown-content'>
                    <a href="">WHY DOP@E</a>
                    <a href="">oBJECTIVES</a>
                    <a href="">Outcome</a>
                </div>
              </div>
              
              <div className='dropdown'>
                <li><button className='bar'>Platform</button></li>
                <div className='dropdown-content'>
                    <a href="">Programs</a>
                    <a href="">Curricurum</a>
                    <a href="">Schedules</a>
                </div>
              </div>
             
             <div className='dropdown'>
              <li><button className='bar'>Initiators</button></li>
                <div className='dropdown-content'>
                    <a href="">Partners</a>
                    <a href="">Mentors</a>
                    <a href="">Donors</a>
                </div>
             </div>
              
              <div className='dropdown'>
                <li><button className='bar'>Stories</button></li>
                <div className='dropdown-content'>
                    <a href="">What they do?</a>
                    <a href="">Sessions</a>
                    <a href="">Tweets</a>
                </div>
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

