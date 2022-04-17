import React, { useCallback } from "react";
import { useNavigate } from "react-router";
import app from '../../firebase/index.js'
import './auth.css';

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
    <div id="signup">
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
    </div>
  );
};

export default Signup;