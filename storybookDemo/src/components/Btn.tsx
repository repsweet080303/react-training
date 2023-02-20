import React, { useContext, createContext } from 'react';

const ThemeContext = createContext(null);

function Button({ children }: { children: React.ReactNode }) {
  const theme = useContext(ThemeContext);
  const className = `button-${theme}`;

  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}

export default Button;
