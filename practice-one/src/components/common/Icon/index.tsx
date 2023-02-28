import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProps } from '@/types/interfaces';

const Icon = ({ icon, additionalClass }: IconProps) => (
  <i className={additionalClass}>
    <FontAwesomeIcon icon={icon} />
  </i>
);

export default Icon;
