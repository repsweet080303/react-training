import React, { useContext, ReactNode } from 'react';
import ThemeContext from './ThemeContext';

type PanelProps = {
  title: string,
  children: ReactNode
};

function Panel({ title, children } :PanelProps) {
  const theme = useContext(ThemeContext);
  const className = `panel-${theme}`;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

export default Panel;
