import React from 'react';
import Button from './Btn';
import Panel from './Panel';

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign Up</Button>
      <Button>Login</Button>
    </Panel>
  );
}

export default Form;
