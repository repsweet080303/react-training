import React, { Component } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import List, { IListProps } from './index';
import { IProps } from '../ListItem';

export default {
  title: 'PracticeOne/Common/List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = function list({
  className,
  listItem,
}: IListProps) {
  const listNavigation: IProps[] = [
    { tagName: 'a', title: 'Home', href: '#home' },
    { tagName: 'a', title: 'Product', href: '#product' },
    { tagName: 'a', title: 'Pricing', href: '#pricing' },
    { tagName: 'a', title: 'Contact', href: '#contact' },
  ];
  return (
    <List className={className} listItem={listNavigation} />
  );
};

export const ListRow = Template.bind({});
ListRow.args = {
  className: 'list--row',
};

export const ListColumn = Template.bind({});
ListColumn.args = {
  className: 'list--column',
};
