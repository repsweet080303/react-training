import React from 'react';
import { ILabelProps } from '@/types/interfaces';

const Label = ({ title, size }: ILabelProps) => (
  <div className={`label label--${size}`}>{title}</div>
);

export default Label;
