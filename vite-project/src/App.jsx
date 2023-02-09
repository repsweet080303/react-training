import Greeting from './conditional-render/Greeting';
import Welcome from './components/Welcome';
import './App.css';

function App() {
  const header = <h1 className='header'>Vite + React</h1>;
  return (
    <div className='App'>
      <Welcome name='Px Viet' />
      <Greeting isLogin={true} />
    </div>
  );
}

export default App;
