
import './App.css';
import React, {useState} from "react";
import Animal from './components/Animal.js'
import ChooseBuddy from './components/ChooseBuddy';
import Time from './components/Time.js'
import Checklist from './components/Checklist'
import Suggestions from './components/suggestions/suggestions.js';
import app from './firestore';
import { Auth } from './firestore/Auth';

function App() {
  const [value, setValue] = useState("cat");

  return (
    <Auth>
      <div className="main">
        <button onClick={()=> app.auth().signOut()}>Sign</button>
        <div id="left">
            <Checklist />
        </div>
        <div id="middle">
          <ChooseBuddy setValue = {setValue}/>
          <Time />
          <Animal animalType = {value}/>
        </div>
        <div id="right">
          <Suggestions />
        </div>
      </div>
    </Auth>
  );
}

export default App;
