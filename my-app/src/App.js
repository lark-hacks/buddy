
import './App.css';
//import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Animal from './components/Animal.js';
import React, {useState} from "react";
import Time from './components/Time.js'
import Checklist from './components/checklist/Checklist.js'
import Suggestions from './components/suggestions/Suggestions.js';
import Menubar from './components/menu/Menubar.js'
import Settings from './components/menu/Settings.js'
//import app from './firestore';
//import { Auth } from './firestore/Auth';

function App() {
  const [value, setValue] = useState("cat");
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="main">
      <Settings menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menubar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
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
          <Animal animalType = {value}/>
      </div>
      <div id="right">
        <Suggestions />
      </div>
      
    </div>
  );
}


export default App;
