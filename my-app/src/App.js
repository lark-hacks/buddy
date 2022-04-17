
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React, {useState} from "react";
import Home from './Home.js';
import Signup from './components/Auth/Signup.js';
import Login from './components/Auth/Login.js';
import PrivateRoute from './components/Auth/PrivateRoute.js';
// import ChooseBuddy from './components/ChooseBuddy';
import { AuthProvider } from './components/Auth/Auth.js';

function App() {

  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home}/>
          <Route exact path="/Signup" component={Signup}/>
          <Route exact path="/Login" component={Login}/>
        </div>
      </Router>
    </AuthProvider>
  );
}


export default App;
