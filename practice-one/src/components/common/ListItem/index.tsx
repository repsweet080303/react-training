import React from 'react';
import { IListItemProps } from '@/types/interfaces';

function ListItem({ tagName: TagName, href, title }: IListItemProps) {
  return (
    <li className="list-item">
      <TagName className="list-item__link" href={href}>
        {title}
      </TagName>
    </li>
  );
}

export default ListItem;
