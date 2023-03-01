import React from 'react';
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
      <CardCourse
        modify="training"
        title="Training Courses"
        description="The gradual accumulation of
        information about atomic and
        small-scale behaviour..."
      />
      <CardCourse
        modify="life"
        title="Lifetime access"
        description="The gradual accumulation of
        information about atomic and
        small-scale behaviour..."
      />
    </div>
  );
}

export default App;
