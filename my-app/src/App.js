
import './App.css';
import React, { useState } from 'react';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Checklist from './components/Checklist'
import Suggestions from './components/suggestions/suggestions.js';

function App() {

  return (
    <div className="main">
      <h1>Hello</h1>

      <div id="left">
          <Checklist />
      </div>
      <div id="middle">
      </div>
      <div id="right">
        <Suggestions />
      </div>
    </div>
  );
}


export default App;
