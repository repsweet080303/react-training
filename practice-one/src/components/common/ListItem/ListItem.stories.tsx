import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ListItem from '@/components/common/ListItem';
import { IListItemProps } from '@/types/interfaces';

export default {
  title: 'PracticeOne/Common/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = ({
  href,
  tagName,
  text,
  icon,
  itemClass,
  size,
}: IListItemProps) => (
  <ListItem
    icon={icon}
    href={href}
    tagName={tagName}
    text={text}
    img={icon}
    itemClass={itemClass}
    size={size}
  />
);

export const HomeItem = Template.bind({});
HomeItem.args = {
  icon: 'src/assets/icons/phone.svg',
  href: '#',
  tagName: 'a',
  text: 'Home',
};

export const AboutUs = Template.bind({});
AboutUs.args = {
  ...HomeItem.args,
  icon: '',
  text: 'About Us',
};
