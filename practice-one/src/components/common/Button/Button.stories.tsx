import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { Props } from './index';

export default {
  title: 'PracticeOne/Common/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({
  variant,
  size,
  type,
  href,
  title,
  tag,
}: Props) => (
  <Button
    type={type}
    variant={variant}
    size={size}
    href={href}
    title={title}
    tag={tag}
  />
);

export const Primary = Template.bind({});
Primary.args = {
  type: 'button',
  variant: 'primary',
  size: 'md',
  title: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'button',
  variant: 'secondary',
  size: 'lg',
  title: 'Secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'button',
  variant: 'tertiary',
  size: 'xs',
  title: 'Tertinary',
};

export const Quaternary = Template.bind({});
Quaternary.args = {
  type: 'button',
  variant: 'quaternary',
  size: 'lg',
  title: 'Quaternary',
};

export const Quinary = Template.bind({});
Quinary.args = {
  type: 'button',
  variant: 'quinary',
  size: 'sm',
  title: 'Quinary',
};
