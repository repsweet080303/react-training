import React from 'react';
import { useState, useEffect } from 'react';

function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you are clicked ${count} times`;
  },[]);
  return (
    <>
      <h3>you were clicked {count} !</h3>
      <button onClick={() => setCount(count + 1)}>Click!</button>
    </>
  );
}

export default Count;
