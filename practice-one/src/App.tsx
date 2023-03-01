import React from 'react';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import Header from '@/components/layouts/Header';
import CardCourse from '@/components/common/CardCourse';

function App() {
  return (
    <div className="App">
      <Header />
      <CardCourse
        modify="expert"
        title="Expert instruction"
        description="The gradual accumulation of
        information about atomic and
        small-scale behaviour..."
      />
    </div>
  );
}

export default App;
