import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProps } from '@/types/interfaces';

const Icon = ({ icon, additionalClass }: IconProps) => (
  <div className={additionalClass}>
    <FontAwesomeIcon icon={icon} />
  </div>
);

export default Icon;
