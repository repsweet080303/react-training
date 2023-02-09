import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Watch from './Watch';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Clock(props) {
  const [status, setState] = useState(true);
  return (
    <div className='clock'>
      <h2>Hello guys</h2>
      <h3>It's time: {props.date.toLocaleTimeString()}</h3>
      <button
        onClick={() => {
          setState((prev) => !prev);
        }}
      >
        Change status
      </button>
      {status && <Watch />}
    </div>
  );
}

function renderClock() {
  root.render(
    <div>
      <Clock date={new Date()} />
    </div>
  );
}

setInterval(renderClock, 1000);

export default Clock;
