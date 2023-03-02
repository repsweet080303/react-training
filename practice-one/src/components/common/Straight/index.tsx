import React from 'react';
import { IStraightProps } from '@/types/interfaces';

const Straight = ({ additionalClass }: IStraightProps) => (
  <div className={`straight ${additionalClass}`} />
);

export default Straight;
