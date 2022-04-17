import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./SlidingMenu.module.css";
import catHeadPhoto from "../../img/cat-head.svg"
import dogHeadPhoto from "../../img/dog-head.svg"
import pandaHeadPhoto from "../../img/panda-head.svg"

const SlidingMenu = props => {
  const { isOpen, children, onChange } = props;

  const onClickHandler = () => {
    onChange(!isOpen);
    console.log(isOpen);
  };

  const onChangeValue = (e) => {
    console.log(e.target.value);
    this.setState({animal:e.target.value});
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
        <div id="menu-inner">
          <h2>About WellBuddies</h2>
          <p>WellBuddies was created for students to prioritize their own wellbeing. By listening to your buddy's suggestions and taking care of them, you take care of yourself.</p>
          <p>Choose between a cat, corgi dog, or a panda for your buddy. Enter in your location, and your buddy will suggest wellness activities to do based on your weather. WellBuddies suggests wellness activities for you to do, and you can check them off or add your own.</p>
          <p>Created by Elizabeth Frey, Kevin King, Russell Chai, and Annie Qiu for HackDartmouth VII. We made this website with React, HTML/CSS/Javascript, Firebase, and APIs.</p>
        </div>
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
