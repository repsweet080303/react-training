import React from 'react';
import './App.css';
import Button from '@/components/common/Button';

function App() {
  return (
    <div className="App">
      <Button type="button" variant="primary" size="md">
        JOIN US
      </Button>
      <Button type="button" variant="tertiary" size="xs">
        Login
      </Button>
      <Button type="button" variant="secondary" size="lg">
        Get Quote Now
      </Button>
      <Button type="button" variant="quaternary" size="lg">
        Learn More
      </Button>
      <Button type="button" variant="quinary" size="sm">
        Learn More
      </Button>
    </div>
  );
}

export default App;
