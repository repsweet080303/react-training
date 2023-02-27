import React from 'react';
import ListItem from '@/components/common/ListItem';
import { IListProps } from '@/types/interfaces';

const List = ({ additionalClass, listItem }: IListProps) => (
  <ul className={`list ${additionalClass}`}>
    {listItem.map((item) => (
      <ListItem
        key={item.id}
        tagName={item.tagName}
        href={item.href}
        title={item.title}
      />
    ))}
  </ul>
);

export default List;
