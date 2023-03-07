import React from 'react';
import Image from '@/components/common/Image';
import { IListItemProps } from '@/types/interfaces';

const ListItem = ({
  tagName: TagName,
  href,
  text,
  icon,
  itemClass,
  imageClass,
  size,
}: IListItemProps) => (
  <li className="list-item">
    {icon && <Image img={icon} size={size} imageClass={imageClass} alt="icon-contact" />}
    <TagName className={`list-item__link ${itemClass}`} href={href}>
      {text}
    </TagName>
  </li>
);

export default ListItem;
