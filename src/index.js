import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 
import 'bootstrap/dist/css/bootstrap.css';
import Dop from './Components/dop';
import Landing from './Components/landing';
import Form from './Components/form';
import Home from "./Components/home";
// import Slideshow from './Components/slideshow';
// import Donors from "./Components/pages/donors"
// import Mentors from "./Components/pages/mentors"
// import oBJECTIVES from "./Components/pages/objectives"
// import Outcomes from "./Components/pages/outcomes"
// import Patners from "./Components/pages/patners"
// import Programs from "./Components/pages/programs"
// import Schedules from "./Components/pages/schedules"
// import Sessions from "./Components/pages/sessions"
// import Tweets from "./Components/pages/tweets"
// import Why from "./Components/pages/why-dope"



const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(<App />)


