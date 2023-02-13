import React from 'react';

interface Color {
  color: string;
  children: any;
}

function FancyBorder(props: Color) {
  return (
    <>
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    </>
  );
}

export default FancyBorder;
