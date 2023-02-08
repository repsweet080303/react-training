import { useState } from 'react';
import Button from './components/button';
import Label from './components/Label';
import Input from './components/input';
import Welcome from './components/Welcome';
import Comment from './components/Comment';
import comment from './abstract/utils';
import './App.css';

function App() {
  const header = <h1 className='header'>Vite + React</h1>;
  return (
    <div className='App'>
      <Welcome name='Px Viet' />
      <Comment
        author={comment.author}
        date={comment.date}
        text={comment.text}
      />
      {header}
      <Label></Label>
      <Input />
      <Button></Button>
    </div>
  );
}

export default App;
