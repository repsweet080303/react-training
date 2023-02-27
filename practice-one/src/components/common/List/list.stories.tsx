import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import List from '@/components/common/List';
import { IListProps, IListItemProps } from '@/types/interfaces';

export default {
  title: 'PracticeOne/Common/List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = function list({
  additionalClass,
}: IListProps) {
  const listNavigation: IListItemProps[] = [
    { tagName: 'a', title: 'Home', href: '#home' },
    { tagName: 'a', title: 'Product', href: '#product' },
    { tagName: 'a', title: 'Pricing', href: '#pricing' },
    { tagName: 'a', title: 'Contact', href: '#contact' },
  ];
  return (
    <List additionalClass={additionalClass} listItem={listNavigation} />
  );
};

export const ListRow = Template.bind({});
ListRow.args = {
  additionalClass: 'list--row',
};

export const ListColumn = Template.bind({});
ListColumn.args = {
  additionalClass: 'list--column',
};
