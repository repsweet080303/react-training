import React from 'react';

interface Props {
  celsius: number;
}

function BoilingVerdict(props: Props) {
  if (props.celsius >= 100) {
    return <h2>water Boillll</h2>;
  }
  return <h2>water wouldn't boil</h2>;
}

export default BoilingVerdict;
