import React, { useState } from 'react';
import ChecklistItem from './ChecklistItem.js';
import './Checklist.css';

function Checklist(props){
  const[list,setList] = useState([]);
  const[value,setValue] = useState("");


  const removeItem = (index) => {
    setList([...value.slice(0,index), ...value.slice(index+1)]);
  }

  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setList([...list, value]);
      setValue("");
    }
  }

  return(
    <div id="checklist">
      <div className="title">My Wellness</div>
      <div className="list-container">
        {list.map((item, index) => (
          <div className='checklist-item'>
            <ChecklistItem checked = {false} value = {item} removeItem = {removeItem} index = {index}/>
          </div>
        ))}
        <div className="add-habit">
          <input onChange={(e) => { setValue(e.target.value);}}  onKeyDown={_handleKeyDown} value={value} placeholder="+ Add new wellness habit"/>
        </div>
    </div>
    </div>
  );
}

export default Checklist;
