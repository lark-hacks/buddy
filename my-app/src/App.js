
import './App.css';
//import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Animal from './components/Animal.js';
import React, {useState} from "react";
//import ChooseBuddy from './components/ChooseBuddy';
import Time from './components/Time.js'
import Checklist from './components/checklist/Checklist.js'
import Suggestions from './components/suggestions/Suggestions.js';
import Menu from './components/Menu.js';
import app from './firestore';
import { Auth } from './firestore/Auth';

function App() {
  const [value, setValue] = useState("cat");
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="main">
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div id="left">
          <Checklist />
      </div>
      <div id="middle">
        <div className="time">
          <Time />
        </div>
        
        <div className='animal-container'>
          <Animal animalType={'cat'}/>
        </div>
          {/* <ChooseBuddy setValue = {setValue}/>
          <Animal animalType = {value}/> */}
      </div>
      <div id="right">
        <Suggestions />
      </div>
      
    </div>
  );
}


export default App;
