import React from 'react';
import Form from './components/Form';
import ThemeContext from './components/ThemeContext';
import StopWatch from './components/StopWatch';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <h1>Vite + React</h1>
      <Count /> */}
      <ThemeContext.Provider value="dark">

        <Form />
      </ThemeContext.Provider>
      <StopWatch />
    </div>
  );
}

export default App;
