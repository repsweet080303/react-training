import React from 'react';
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
      className={`${addtionalClass} logo__${size}`}
      alt={alt}
    />
  </div>
);

export default Logo;
