import './App.css';
import Greeting from './conditionalRender/Greeting';
import LoginControl from './conditionalRender/LoginControl';
import Page from './conditionalRender/Page';
import ListNumber from './listAndKey/ListNumber';
function App() {
  return (
    <div className='App'>
      <Greeting isLoggedIn={true} />
      <LoginControl />
      <Page/>
      <ListNumber number={[2,2,7,3,7]}/>
    </div>
  );
}

export default App;
