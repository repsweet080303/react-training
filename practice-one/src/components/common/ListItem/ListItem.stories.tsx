import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ListItem from '@/components/common/ListItem';
import { IListItemProps } from '@/types/interfaces';
import Phone from '@/assets/icons/phone.svg';

export default {
  title: 'PracticeOne/Common/ListItem',
  component: ListItem,
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = ({
  href,
  tagName,
  title,
  img,
  image,
  additionalClass,
  size,
}: IListItemProps) => (
  <ListItem
    image={image}
    href={href}
    tagName={tagName}
    title={title}
    img={img}
    additionalClass={additionalClass}
    size={size}
  />
);

export const HomeItem = Template.bind({});
HomeItem.args = {
  image: Phone,
  img: Phone,
  href: '#',
  tagName: 'a',
  title: 'Home',
};

export const AboutUs = Template.bind({});
AboutUs.args = {
  href: '#',
  tagName: 'a',
  title: 'About Us',
};
