
import React from 'react';
import './App.css';
import Checklist from './components/Checklist'
import Suggestions from './components/suggestions/suggestions.js';

function App() {
  return (
    <div className="main">
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
