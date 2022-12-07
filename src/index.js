import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Itinerary from './components/Itinerary.jsx';
import Planner from './components/Planner.jsx';
import AppBarPremic from './components/AppBarPremic.jsx';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Pricing from './components/Pricing';
import App from './components/App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AppBarPremic/>
      <Planner/>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Itinerary />

       
  </React.StrictMode>
);
