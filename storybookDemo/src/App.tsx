import React, { useState } from 'react';
import ProductPage from './components/ProductPage';

import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className="App">
      <p>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark mode
      </p>
      <hr />
      <ProductPage
        referrer="wizard_of_oz"
        productId={123}
        theme={isDark ? 'dark' : 'light'}
      />
    </div>
  );
}

export default App;
