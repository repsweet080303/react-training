import React from 'react';
import { IListItemProps } from '@/types/interfaces';

function ListItem(props: IListItemProps) {
  const {
    tagName: TagName, href, title,
  } = props;
  return (
    <li className="list-item">
      <TagName className="list-item__link" href={href}>
        {title}
      </TagName>
    </li>
  );
}

export default ListItem;
