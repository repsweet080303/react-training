import React from 'react';
import { ILabelProps } from '@/types/interfaces';

const Label = ({ title, size, additionalClass }: ILabelProps) => (
  <div className={`label label--${size} ${additionalClass}`}>{title}</div>
);

export default Label;
