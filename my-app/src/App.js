import './App.css';
import React, {useState} from "react";
import Animal from './components/Animal.js'
//import ChooseBuddy from './components/ChooseBuddy';
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
        {/* <ChooseBuddy setValue = {setValue}/> */}
        <Time />
        <Animal animalType = {value}/>
      </div>
      <div id="right">
        <Suggestions />
      </div>
    </div>
  );
}

export default App;
