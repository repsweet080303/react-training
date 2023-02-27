import React from 'react';
import List from '@/components/common/List';
import { IProps } from './components/common/ListItem';

function App() {
  const listNavigation: IProps[] = [
    { tagName: 'a', title: 'Home', href: '#home' },
    { tagName: 'a', title: 'Product', href: '#product' },
    { tagName: 'a', title: 'Pricing', href: '#pricing' },
    { tagName: 'a', title: 'Contact', href: '#contact' },
  ];
  return (
    <div className="App">
      <List listItem={listNavigation} className="list--row" />
    </div>
  );
}

export default App;
