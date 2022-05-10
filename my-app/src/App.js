
import './App.css';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import React from "react";
import Signup from './components/Auth/Signup.js';
import Login from './components/Auth/Login.js';
import PrivateRoute from './components/Auth/PrivateRoute.js';
import { Fragment } from 'react';
// import ChooseBuddy from './components/ChooseBuddy';
import { AuthProvider } from './components/Auth/Auth.js';

function App() {

  return (
    <AuthProvider>
      <Router>
        <Fragment>
          <Routes>
          <Route exact path='/' element={<PrivateRoute/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
        </Fragment>  
        </Router>
    </AuthProvider>
  );
}


export default App;
