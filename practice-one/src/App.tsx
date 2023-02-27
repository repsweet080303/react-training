import React from 'react';
import List from '@/components/common/List';
import listNavigation from '@/constants';

function App() {
  return (
    <div className="App">
      <List listItem={listNavigation} additionalClass="list--row" />
    </div>
  );
}

export default App;
