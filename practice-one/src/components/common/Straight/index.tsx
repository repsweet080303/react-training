// React
import React from 'react';

// Interface
import { IStraightProps } from '@/types/interfaces';

const Straight = ({ additionalClass }: IStraightProps) => (
  <div className={`straight ${additionalClass}`} />
);

export default Straight;
