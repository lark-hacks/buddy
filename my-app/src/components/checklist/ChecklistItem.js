import React, { useState } from 'react';
import './Checklist.css'

function ChecklistItem(props){

  const checked = props.checked;
  const value = props.value;

  return(
    <div id="item">
      <label>
      <input value={checked} type="checkbox" />
        <span class="checkbox">  
        </span>
      </label>
      {value}
      <button onClick = {()=>{props.removeItem(props.index);}}>×</button>
    </div>
  );
}

export default ChecklistItem;