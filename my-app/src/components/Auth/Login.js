import React, { useCallback, useContext } from "react";
import { useNavigate, Navigate } from "react-router";
import app from "../../firebase/index.js";
import { AuthContext } from "./Auth.js";
import './auth.css';

const Login = () => {

  let navigate = useNavigate();

  const handleLogin = useCallback(
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
    },
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login">
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
      <button onClick={()=>{navigate("/Signup");}}>Click Here to Sign Up</button>
    </div>
  );
};

export default Login;