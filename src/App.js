// frontend/src/App.js

import React from 'react';
import ResumeForm from './components/resumeform.js';
import './App.css';  // Import the CSS file

function App() {
  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <ResumeForm />
    </div>
  );
}

export default App;
