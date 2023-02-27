import React from 'react';
import '../../../styles/main.scss';
import { IButtonProps } from '@/types/interfaces';

function Button({
  variant = 'primary',
  size = 'md',
  type,
  children,
  href,
  title,
  tag: Component = 'button',
  onClick,
}: IButtonProps) {
  return (
    <Component
      type={type}
      href={href}
      className={`btn btn__${variant} btn--${size}`}
      onClick={(e) => onClick?.(e)}
    >
      {children || title}
    </Component>
  );
}

Button.defaultProps = {
  type: 'button',
  children: '',
  href: '#',
  title: '',
  tag: 'button',
  onClick: () => {},
};

export default Button;
