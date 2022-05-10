import React from 'react';
import './Checklist.css'

function ChecklistItem(props){

  const checked = props.checked;
  const value = props.value;

  return(
    <div id="item">
      <label>
      <input value={checked} type="checkbox" />
        <span className="checkbox">  
        </span>
      </label>
      {value}
      <button onClick = {()=>{props.removeItem(props.index);}}>×</button>
    </div>
  );
}

export default ChecklistItem;