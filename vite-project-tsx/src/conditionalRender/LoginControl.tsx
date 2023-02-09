import React from 'react';
import { LoginButton, LogoutButton } from './ButtonLog';
import Greeting from './Greeting';

interface State {
  isLoggedIn: boolean;
}

interface Props {
  isLoggedIn: boolean;
}

class LoginControl extends React.Component<{}, State> {
  constructor(props: Props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        <div>
          {isLoggedIn ? (
            <LogoutButton onClick={this.handleLogoutClick} />
          ) : (
            <LoginButton onClick={this.handleLoginClick} />
          )}
        </div>
      </div>
    );
  }
}

export default LoginControl;
