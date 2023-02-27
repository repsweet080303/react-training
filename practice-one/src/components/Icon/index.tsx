import React from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface IconProps extends Omit<FontAwesomeIconProps, 'icon'> {
  icon: IconDefinition;
  additionClass: string;
}

const Icon = ({ icon, additionClass }: IconProps) => (
  <div className={additionClass}>
    <FontAwesomeIcon icon={icon} />
  </div>
);

export default Icon;
