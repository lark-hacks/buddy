import React, { useState } from 'react';
import ChecklistItem from './ChecklistItem';

function Checklist(props){
  const[list,setList] = useState([]);
  const[value,setValue] = useState("");

  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setList([...list, value]);
      setValue("");
    }
  }

  return(
    <div id="checklist">
      <div className="title">Your CheckList:</div>
      <div className="list-container">
        {list.map((item, index) => (
         <ChecklistItem checked = {false} value = {item}/>
        ))}
        <input onChange={(e) => { setValue(e.target.value);}}  onKeyDown={_handleKeyDown} value={value} placeholder="Input New Item Here"/>
    </div>
    </div>
  );
}

export default Checklist;
