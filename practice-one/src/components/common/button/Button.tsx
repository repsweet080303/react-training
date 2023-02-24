import React, { ReactNode } from 'react';

declare global {
  interface ReactNode {
    readonly id: number;
  }
}

interface Props {
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  type?: 'button' | 'submit';
  children?: ReactNode;
  title?: string;
  href?: string;
  tag?: 'button' | 'a';
  onClick?: (event: React.MouseEvent) => void;
}

function Button(props: Props) {
  const {
    variant = 'primary',
    size = 'md',
    type,
    children,
    href,
    title,
    tag: Component = 'button',
    onClick,
  } = props;

  return (
    <Component
      type={type}
      href={href}
      className={`btn btn-${variant} btn-${size}`}
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
