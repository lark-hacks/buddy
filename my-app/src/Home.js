
import './App.css';
import Animal from './components/Animal.js';
import React, {useState} from "react";
// import ChooseBuddy from './components/ChooseBuddy';
import Time from './components/Time.js'
import Checklist from './components/checklist/Checklist.js'
import Suggestions from './components/suggestions/suggestions.js';
import SlidingMenu from './components/menu/SlidingMenu.js';

function Home() {
  const [value, setValue] = useState("cat");
  const [isOpen,setOpen] = useState(true);



  return (
    <div className="main">
      <SlidingMenu isOpen={isOpen} onChange={setOpen}/>
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
          {/* <ChooseBuddy setValue = {setValue}/> */}
          {/* <Animal animalType = {value}/> */}
        </div>
        <div id="right">
          <Suggestions />
        </div>
    </div>
  );
}


export default Home;
