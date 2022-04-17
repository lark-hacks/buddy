import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./SlidingMenu.module.css";
import catHeadPhoto from "../../img/cat-head.svg"
import dogHeadPhoto from "../../img/dog-head.svg"
import pandaHeadPhoto from "../../img/panda-head.svg"

const SlidingMenu = props => {
  const { isOpen, children, onChange, childToParent } = props;

  const onClickHandler = () => {
    onChange(!isOpen);
    console.log(isOpen);
  };

  const [name, setName] = useState('');

  const childToParent = (name) => {
    setName(name);
  }

  const editName = (event) => {
      event.preventDefault(); 
      const name = event.target[0].value;
      childToParent(name);
  }

  return (
    <div className="wrapper">
      {/* Hamburger icon */}
      <div
        onClick={onClickHandler}
        className={cx(styles.hamburger, { [styles.active]: !isOpen })}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* sliding menu */}
      <div className={cx(styles.menu, { [styles.active]: !isOpen })}>
        {children}
<<<<<<< HEAD
        <form onSubmit={editName}>
          <input type="text" name="editname" placeholder="Edit buddy's name"></input>
          <button type="submit">Submit</button>
        </form>
        
=======
        <div className='animal-button'> 
            <div className='animal-head'>
                <label>
                    <img src = {catHeadPhoto} alt = "cat head" />
                    <input type="radio" name="avatar" value="cat" onChange={(e)=>{this.onChangeValue(e);}}/>
                </label>
            </div>   
            <div className='animal-head'>
                <label>
                    <img src = {dogHeadPhoto} alt = "dog head" />
                    <input type="radio" name="avatar" value="dog" onChange={(e)=>{this.onChangeValue(e);}}/>
                </label>  
            </div>
            <div className='animal-head'>
                <label>
                    <img src = {pandaHeadPhoto} alt = "panda head" />
                    <input type="radio" name="avatar" value="panda" onChange={(e)=>{this.onChangeValue(e);}}/>
                </label>
            </div> 
        </div>
>>>>>>> 8d7d19d782944ea6d8785585d6af0cd0c030d313
      </div>
    </div>
  );
};

SlidingMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node,
  onChange: PropTypes.func.isRequired
};

SlidingMenu.defaultProps = {
  isOpen: false
};

export default SlidingMenu;
