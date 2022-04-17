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

  // const [name, setName] = useState('');

  // childToParent(name) {
  //   setName(name);
  // }

  // const editName = (event) => {
  //     event.preventDefault(); 
  //     const name = event.target[0].value;
  //     childToParent(name);
  // }

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
        {/* <form onSubmit={editName}>
          <input type="text" name="editname" placeholder="Edit buddy's name"></input>
          <button type="submit">Submit</button>
        </form> */}
        
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
