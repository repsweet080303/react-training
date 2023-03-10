// React
import React from 'react';

// Interface
import { ILogoProps } from '@/types/interfaces';

const Logo = ({
  addtionalClass,
  href,
  size,
  alt,
}: ILogoProps) => (
  <div>
    <img
      src={href}
      className={`${addtionalClass} company__logo--${size}`}
      alt={alt}
    />
  </div>
);

export default Logo;
