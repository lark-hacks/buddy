import React, { useState } from 'react';

function ChecklistItem(props){
  const[checked,setChecked] = useState(false);
  const[value,setValue] = useState(this.props.value);

  return(
    <div id="checklist">
      <h1>Thanks for checking in today</h1>
    </div>
  );
}