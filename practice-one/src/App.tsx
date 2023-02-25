import React from 'react';
import ListItem from '@/components/common/ListItem';

function App() {
  return (
    <div className="App">
      <ListItem tagName="a" href="#" title="Home" />
      <ListItem tagName="a" href="#" title="Product" />
      <ListItem tagName="a" href="#" title="Pricing" />
      <ListItem tagName="a" href="#" title="Contact" />
    </div>
  );
}

export default App;
