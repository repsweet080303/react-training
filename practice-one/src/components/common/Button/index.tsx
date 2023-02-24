import React, { ReactNode } from 'react';

interface Props {
  variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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
