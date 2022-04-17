import React, { useState } from 'react';

function ChecklistItem(props){

  const checked = props.checked;
  const value = props.value;

  return(
    <div id="item">
      <input value={checked} type="checkbox" />
      {value}
      <button onClick = {()=>{props.removeItem(props.index);}}>Delete</button>
    </div>
  );
}

export default ChecklistItem;