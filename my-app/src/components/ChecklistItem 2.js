import React, { useState } from 'react';

function ChecklistItem(props){
  const[checked,setChecked] = useState(props.checked);
  const[value,setValue] = useState(props.value);
  const deleteItem = props.deleteItem;

  return(
    <div id="item">
      <input value={checked} type="checkbox" />
      {value}
    </div>
  );
}

export default ChecklistItem;