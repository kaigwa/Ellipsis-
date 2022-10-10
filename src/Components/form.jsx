import React, { Component } from 'react';
import './form/form.css';


class Form extends Component {
  
  render() { 
    return (
      <div className='form'>
        <div className='d'>
        <div>
            <a href="https://ellipsis.co.tz/"><img className='picture' src="./images/Ellipsis logo.png" alt="logo"/></a>
        </div>
        <div className='box'>
          <form>
            <label>First Name:</label><br />
            <input type='text'/><br />
            <label>Surname:</label><br />
            <input type='text'/><br />
            <label>Email:</label><br />
            <input type='email'/><br />
            <label>Phone Number:</label><br />
            <input type='number'/><br /><br />
            <input className='btn4' type="Submit" />
            </form>
        </div>
        {/* <div className='cat'>
            <img className='orange' src={('./images/Ellipsis logo 2.png')}/>
        </div> */}
      </div>
       
      </div>
      
      
      
    );
  }
}
 
export default Form;


