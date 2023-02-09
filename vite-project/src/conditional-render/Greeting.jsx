import UserGreet from './UserGreet';
import UserLogin from './UserLogin';

function Greeting(props) {
  const isLogin = props.isLogin;
  if (isLogin) {
    return <UserGreet />;
  } else {
    return <UserLogin />;
  }
}

export default Greeting;
