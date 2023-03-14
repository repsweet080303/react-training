// Library
import React, { Children } from 'react';
import clsx from 'clsx';

// Interface
import { IButton } from '@/types/interface';

const Button = ({
  variant,
  size,
  children,
  onClick,
}: IButton) => (
  <button
    type="button"
    className={clsx('btn', variant && `btn-${variant}`, size && `btn-${size}`)}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
