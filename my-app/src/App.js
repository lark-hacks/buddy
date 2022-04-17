
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Animal from './components/Animal.js';
import React, {useState} from "react";
// import ChooseBuddy from './components/ChooseBuddy';
import Time from './components/Time.js'
import Checklist from './components/Checklist.js'
import Suggestions from './components/suggestions/suggestions.js';

function App() {
  const [value, setValue] = useState("cat");

  return (
    <div className="main">

      <div id="left">
          <Checklist />
      </div>
      <div id="middle">
        <div className='animal-container'>
          <Animal animalType={'cat'}/>
        </div>
        {/* <ChooseBuddy setValue = {setValue}/> */}
        <Time />
        {/* <Animal animalType = {value}/> */}
      </div>
      <div id="right">
        <Suggestions />
      </div>
    </div>
  );
}


export default App;
