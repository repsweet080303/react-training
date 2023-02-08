import ReactDOM from 'react-dom/client';
import Watch from './Watch';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Clock(props) {
  return (
    <div className='clock'>
      <h2>Hello guys</h2>
      <h3>It's time: {props.date.toLocaleTimeString()}</h3>
    </div>
  );
}

function renderClock() {
  root.render(
    <div>
      <Clock date={new Date()} />
      <Watch />
    </div>
  );
}

setInterval(renderClock, 1000);

export default Clock;
