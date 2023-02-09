import React from 'react';

interface PropsButton {
  onClick: () => void;
}

function LoginButton(props: PropsButton) {
  return (
    <>
      <button onClick={props.onClick}> Log In</button>
    </>
  );
}

function LogoutButton(props: PropsButton) {
  return (
    <>
      <button onClick={props.onClick}>Log Out</button>
    </>
  );
}

export { LoginButton, LogoutButton };
