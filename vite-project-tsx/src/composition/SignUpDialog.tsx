import React from 'react';
import Dialog from './Dialog';

interface State {
  login: string;
}

class SignUpDialog extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { login: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    alert(`So great when heard you said "${this.state.login}"`);
  }

  render(): React.ReactNode {
    return (
      <>
        <Dialog
          title='Mars Exploration Program'
          message='How do you feel today?'
        >
          <input
            type='text'
            value={this.state.login}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSignUp}>Sign up</button>
        </Dialog>
      </>
    );
  }
}

export default SignUpDialog;
