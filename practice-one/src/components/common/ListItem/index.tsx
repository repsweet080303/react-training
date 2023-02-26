import React from 'react';

export interface IProps {
  tagName: 'p' | 'a';
  href?: string;
  title: string;
}

function ListItem(props: IProps) {
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
