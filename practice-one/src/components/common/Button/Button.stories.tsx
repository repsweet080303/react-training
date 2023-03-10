// React
import React from 'react';

// Storybook
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import Button from '@/components/common/Button';

// Interface
import { IButtonProps } from '@/types/interfaces';

export default {
  title: 'PracticeOne/Common/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({
  variant,
  size,
  type,
  children,
}: IButtonProps) => (
  <Button type={type} variant={variant} size={size}>
    {children}
  </Button>
);

export const Primary = Template.bind({});
Primary.args = {
  type: 'button',
  variant: 'primary',
  size: 'md',
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'button',
  variant: 'secondary',
  size: 'lg',
  children: 'Secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'button',
  variant: 'tertiary',
  size: 'xs',
  children: 'Tertinary',
};

export const Quaternary = Template.bind({});
Quaternary.args = {
  type: 'button',
  variant: 'quaternary',
  size: 'lg',
  children: 'Quaternary',
};

export const Quinary = Template.bind({});
Quinary.args = {
  type: 'button',
  variant: 'quinary',
  size: 'sm',
  children: 'Quinary',
};
