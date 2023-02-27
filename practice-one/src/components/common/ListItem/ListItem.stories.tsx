import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ListItem from '@/components/common/ListItem';
import { IListItemProps } from '@/types/interfaces';

export default {
  title: 'PracticeOne/Common/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = function listItem({
  href,
  tagName,
  title,
}: IListItemProps) {
  return <ListItem href={href} tagName={tagName} title={title} />;
};

export const Primary = Template.bind({});
Primary.args = {
  href: '#',
  tagName: 'a',
  title: 'Home',
};
