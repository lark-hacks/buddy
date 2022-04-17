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
