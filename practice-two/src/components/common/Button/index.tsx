// Library
import React from 'react';
import clsx from 'clsx';

// Interface
import { IButton } from '@/types/interface';

import './button.css';

const Button = ({
  variant,
  size,
  label,
  onClick,
}: IButton) => (
  <button
    type="button"
    className={clsx('btn', variant && `btn-${variant}`, size && `btn-${size}`)}
    onClick={onClick}
  >
    {label}
  </button>
);

export default Button;
