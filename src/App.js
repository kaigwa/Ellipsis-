
import Form  from "./Components/form";
import Landing from "./Components/landing";
import Dop from "./Components/dop";
import Home from "./Components/home";
// import Slideshow from "./Components/slideshow";
import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/Landing" element={< Landing/>} />
          <Route path="/Form" element={< Form/>} />
          <Route path="/Dop" element={< Dop/>} />
        </Routes>
      </Router>


      {/* <Router>
        <Routes>
          <Route path="/" element={< Dop/>} />
          <Route path="/Why" element={< Why/>} />
          <Route path="/oBJECTIVES" element={< oBJECTIVES/>} />
          <Route path="/Outcomes" element={< Outcomes/>} />
        </Routes>
      </Router>

      <Router>
        <Routes>
          <Route path="/" element={< Dop/>} />
          <Route path="/Programs" element={< Programs/>} />
          <Route path="/Curriculum" element={< Curriculum/>} />
          <Route path="/Schedules" element={< Schedules/>} />
        </Routes>
      </Router>

      <Router>
        <Routes>
          <Route path="/" element={< Dop/>} />
          <Route path="/Patners" element={< Patners/>} />
          <Route path="/Mentors" element={< Mentors/>} />
          <Route path="/Donors" element={< Donors/>} />
          
        </Routes>
      </Router>

      <Router>
        <Routes>
          <Route path="/" element={< Dop/>} />
          {/* <Route path="/What they do?)" element={< Do/>} /> 
          <Route path="/Sessions)" element={< Sessions/>} />
          <Route path="/Tweets" element={< Tweets/>} />
          
        </Routes>
      </Router>  */}


    </div>
  );
};

export default App;


