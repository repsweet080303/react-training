import React from 'react';
import ListItem from '@/components/common/ListItem';
import Typo from '@/components/common/Typo';
import { IListProps } from '@/types/interfaces';

const List = ({ title, additionalClass, listItem }: IListProps) => (
  <ul className={`list ${additionalClass}`}>
    {title && (
      <Typo
        sizeTypo="sm"
        statusTypo="typo__secondary"
        weightTypo="typo__bold"
        tagTypo="p"
        additionalTypo="list__title"
      >
        {title}
      </Typo>
    )}
    {listItem.map((item) => (
      <ListItem
        itemClass={item.itemClass}
        icon={item.icon}
        key={item.id}
        size={item.size}
        imageClass={item.imageClass}
        tagName={item.tagName}
        href={item.href}
        text={item.text}
      />
    ))}
  </ul>
);

export default List;
