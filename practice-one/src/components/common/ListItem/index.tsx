import React from 'react';
import Image from '@/components/common/Image';
import { IListItemProps } from '@/types/interfaces';

const ListItem = ({
  tagName: TagName,
  href,
  title,
  image,
  additionalClass,
  img,
  size,
}: IListItemProps) => (
  <li className="list-item">
    {image && <Image img={img} additionalClass={additionalClass} size={size} />}
    <TagName className="list-item__link" href={href}>
      {title}
    </TagName>
  </li>
);

export default ListItem;
