import React from 'react';
import Form from './components/Form';
import ThemeContext from './components/ThemeContext';
import StopWatch from './components/StopWatch';
import StopRunTime from './components/StopRunTime';

import './App.css';

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value="dark">
        <Form />
      </ThemeContext.Provider>
      <StopWatch />
      <StopRunTime />
    </div>
  );
}

export default App;
