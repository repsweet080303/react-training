import React from 'react';
import { UserGreeting, UserLogin } from './GreetUser';

interface LoggedIn {
  isLoggedIn: boolean;
}

function Greeting(props: LoggedIn) {
  const isLogin = props.isLoggedIn;

  if (isLogin) {
    return <UserGreeting />;
  } else {
    return <UserLogin />;
  }
}

export default Greeting;
