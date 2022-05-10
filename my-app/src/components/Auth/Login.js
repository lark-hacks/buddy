import React, { useContext } from "react";
import { useNavigate, Navigate } from "react-router";
import app from "../../firebase/index.js";
import { AuthContext } from "./Auth.js";
import './auth.css';
import logo from '../../img/logo.svg';

const Login = () => {

  let navigate = useNavigate();

  const handleLogin = 
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        navigate("/");
      } catch (error) {
        alert(error);
      }
    }

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login container">
      <div className="logo-container">
        <img id="logo" src={logo} alt="logo"/>
        <div className="logo-title">WellBuddies</div>
      </div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
      <button className="secondary" onClick={()=>{navigate("/Signup");}}>Sign Up</button>
    </div>
  );
};

export default Login;