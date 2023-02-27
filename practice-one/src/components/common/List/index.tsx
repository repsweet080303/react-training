import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListItem from '@/components/common/ListItem';
import { IListProps } from '@/types/interfaces';

function List(props: IListProps) {
  const itemId = uuidv4();
  const { className, listItem } = props;
  return (
    <ul className={`list ${className}`}>
      {listItem.map((item) => (
        <ListItem
          key={itemId}
          tagName={item.tagName}
          href={item.href}
          title={item.title}
        />
      ))}
    </ul>
  );
}

export default List;
