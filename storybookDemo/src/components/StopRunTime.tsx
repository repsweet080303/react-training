import React, { useState, useRef, useEffect } from 'react';

function StopRunTime() {
  const [count, setCount] = useState(60);
  const timerIdRef = useRef<NodeJS.Timeout>();
  const prevCount = useRef<number>();

  useEffect(() => { prevCount.current = count; }, [count]);

  const handleStart = () => {
    timerIdRef.current = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerIdRef.current);
  };

  console.log(count, prevCount.current);

  return (
    <div style={{ padding: '20px' }}>
      <h1>{count}</h1>
      <button type="button" onClick={handleStart}>
        Start
      </button>
      <button type="button" onClick={handleStop}>
        Stop
      </button>
    </div>
  );
}

export default StopRunTime;
