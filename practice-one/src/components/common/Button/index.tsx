import React from 'react';
import '../../../styles/main.scss';
import { IButtonProps } from '@/types/interfaces';

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
}: IButtonProps) => (
  <button
    type="button"
    className={`btn btn__${variant} btn--${size}`}
    onClick={(e) => onClick?.(e)}
  >
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
  children: '',
  href: '#',
  title: '',
  tag: 'button',
  onClick: () => {},
};

export default Button;
