import React from 'react';
import Image from '@/components/common/Image';
import { IListItemProps } from '@/types/interfaces';

const ListItem = ({
  tagName: TagName,
  href,
  text,
  icon,
  additionalClass,
  size,
}: IListItemProps) => (
  <li className="list-item">
    {icon && <Image img={icon} additionalClass={additionalClass} size={size} />}
    <TagName className="list-item__link" href={href}>
      {text}
    </TagName>
  </li>
);

export default ListItem;
