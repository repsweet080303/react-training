import React, { useRef, useState } from 'react';

function StopWatch() {
  const [now, setNow] = useState(0);
  const [startime, setStartTime] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | number>(0);

  function handleStart(): void {
    setNow(Date.now());
    setStartTime(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop(): void {
    clearInterval(intervalRef.current as NodeJS.Timeout);
  }

  let secondPassed = 0;
  if (startime !== 0 && now !== 0) {
    secondPassed = (now - startime) / 1000;
    console.log(now, startime);
  }

  return (
    <>
      <h1>
        Time passed:
        {secondPassed.toFixed(3)}
      </h1>
      <button type="button" onClick={handleStart}>
        Start
      </button>
      <button type="button" onClick={handleStop}>
        Stop
      </button>
    </>
  );
}

export default StopWatch;
