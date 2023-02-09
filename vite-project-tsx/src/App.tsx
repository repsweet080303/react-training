import './App.css';
import Greeting from './conditionalRender/Greeting';
import LoginControl from './conditionalRender/LoginControl';
import Page from './conditionalRender/Page';
function App() {
  return (
    <div className='App'>
      <Greeting isLoggedIn={true} />
      <LoginControl />
      <Page/>
    </div>
  );
}

export default App;
