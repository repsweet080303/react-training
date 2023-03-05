import React from 'react';
import { IScope } from '@/types/interfaces';
import Icon from '@/components/common/Icon';
import Typo from '@/components/common/Typo';

const ItemScope = ({ icon, children, typeScope }: IScope) => (
  <li className="item-scope">
    <Icon icon={icon} additionalClass={`icon__${typeScope}`} />
    <Typo additionalTypo="item-scope__size" classTypo="typo__feature--start" sizeTypo="xs" statusTypo="typo__secondary" tagTypo="h6" weightTypo="typo__bold">{children}</Typo>
  </li>
);

export default ItemScope;
