
import './App.css';
import Animal from './components/Animal.js';
import React, {useContext, useState} from "react";
// import ChooseBuddy from './components/ChooseBuddy';
import Time from './components/Time.js'
import Checklist from './components/checklist/Checklist.js'
import Suggestions from './components/suggestions/suggestions.js';
import app from './firebase/index.js';
import { AuthContext } from './components/Auth/Auth.js';

function Home() {
  const [value, setValue] = useState("cat");
  const [docId,setDocId] = useState("");

  const {currentUser} = useContext(AuthContext);

  app.firestore().collection('user-data').add({
      user: currentUser.email,
  }).then(ref =>{
      setDocId(ref.id);
      setValue("");
  });

  return (
      <div className="main">
        <div id="left">

            <Checklist docId = {docId}/>
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
