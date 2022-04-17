import React, { useCallback } from "react";
import { useNavigate } from "react-router";
import app from '../../firebase/index.js'
import './auth.css';
import logo from '../../img/logo.svg';


const Signup = () => {

  let navigate = useNavigate();

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app.auth().createUserWithEmailAndPassword(email.value, password.value);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  });

  return (
    <div className="container" id="signup">

    <div className="logo-container">
        <img id="logo" src={logo} alt="logo"/>
        <div className="logo-title">WellBuddies</div>
      </div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <button className="secondary" onClick={()=>{navigate("/Login");}}>Log In</button>
    </div>
  );
};

export default Signup;