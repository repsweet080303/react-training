import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProps } from '@/types/interfaces';

const Icon = ({ icon, additionalClass, onClick }: IconProps) => (
  <i
    className={`icon ${additionalClass}`}
    onClick={(e) => onClick?.(e)}
    aria-hidden="true"
  >
    <FontAwesomeIcon icon={icon} />
  </i>
);

export default Icon;
