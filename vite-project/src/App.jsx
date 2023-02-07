import { useState } from 'react';
import Button from './components/button';
import './App.css';

function App() {
  const header =  <h1 className='header'>Vite + React</h1>;
  return (
    <div className='App'>
      {header}
      <Button></Button>
    </div>
  );
}

export default App;
