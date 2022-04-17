import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./SlidingMenu.module.css";

const SlidingMenu = props => {
  const { isOpen, children, onChange } = props;

  const onClickHandler = () => {
    onChange(!isOpen);
    console.log(isOpen);
  };

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
