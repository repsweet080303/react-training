import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ListItem, { IProps } from '@/components/common/ListItem';

export default {
  title: 'PracticeOne/Common/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = function listItem({
  href,
  tagName,
  title,
}: IProps) {
  return <ListItem href={href} tagName={tagName} title={title} />;
};

export const Primary = Template.bind({});
Primary.args = {
  href: '#',
  tagName: 'a',
  title: 'Home',
};
