import './App.css';
import Greeting from './conditionalRender/Greeting';
import LoginControl from './conditionalRender/LoginControl';
import Page from './conditionalRender/Page';
import ListNumber from './listAndKey/ListNumber';
import NameForm from './form/NameForm';
import Reservation from './form/Reservation';
import Caculator from './LiftingStateUp/Calculator';
import WelcomeDialog from './composition/WelcomeDialog';
function App() {
  return (
    <div className='App'>
      <Greeting isLoggedIn={true} />
      <LoginControl />
      <Page />
      <ListNumber number={[2, 2, 7, 3, 7]} />
      <NameForm />
      <Reservation />
      <Caculator/>
      <WelcomeDialog/>
    </div>
  );
}

export default App;
