import React from 'react';
import FancyBorder from './FancyBorder';

function WelcomeDialog() {
  return (
    <>
      <FancyBorder color='red'>
        <h1 className='dialog-title'>Welcome</h1>
        <p className='dialog-message'>Thank you for visiting our spacecraft!</p>
      </FancyBorder>
    </>
  );
}

export default WelcomeDialog;
