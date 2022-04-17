import React, { useContext, useState ,useEffect} from 'react';
import ChecklistItem from './ChecklistItem.js';
import { AuthContext } from "../Auth/Auth.js";
import app from "../../firebase/index.js";
import 'firebase/firestore';
import './Checklist.css';

function Checklist(props){ 
  const[list,setList] = useState(["Read a book","Walk around occum"]);
  const[value,setValue] = useState("");
  const docId = props.docId;
  const { currentUser } = useContext(AuthContext);

  const removeItem = (index) => {
    setList([...value.slice(0,index), ...value.slice(index+1)]);
  }
  
  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log(currentUser.email);
      app.firestore().collection('user-data').doc(docId).set({
        list: [...list, value],
      }).then(ref =>{
        setList([...list, value]);
      setValue("");
      });
      
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