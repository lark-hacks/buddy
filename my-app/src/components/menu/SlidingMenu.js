import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./SlidingMenu.module.css";

const SlidingMenu = props => {
  const { isOpen, children, onChange } = props;

  const onClickHandler = () => {
    onChange(!isOpen);
    console.log(isOpen);
  };

<<<<<<< HEAD
  const onChangeValue = (e) => {
    console.log(e.target.value);
    this.setState({animal:e.target.value});
  }
=======
  // const [name, setName] = useState('');

  // childToParent(name) {
  //   setName(name);
  // }

  // const editName = (event) => {
  //     event.preventDefault(); 
  //     const name = event.target[0].value;
  //     childToParent(name);
  // }
>>>>>>> annie-style

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
        <div id="menu-inner">
          <h2>About WellBuddies</h2>
          <p>WellBuddies was created for students to prioritize their own wellbeing. By listening to your buddy's suggestions and taking care of them, you take care of yourself.</p>
          <p>Choose between a cat, corgi dog, or a panda for your buddy. Enter in your location, and your buddy will suggest wellness activities to do based on your weather. WellBuddies suggests wellness activities for you to do, and you can check them off or add your own.</p>
          <p>Created by Elizabeth Frey, Kevin King, Russell Chai, and Annie Qiu for HackDartmouth VII. We made this website with React, HTML/CSS/Javascript, Firebase, and APIs.</p>
        </div>
=======
        {/* <form onSubmit={editName}>
          <input type="text" name="editname" placeholder="Edit buddy's name"></input>
          <button type="submit">Submit</button>
        </form> */}
        
>>>>>>> annie-style
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
