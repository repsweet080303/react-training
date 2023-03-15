import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Component
import Button from '@/components/common/Button';

// Interface
import { IButton } from '@/types/interface';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({
  variant,
  label,
  size,
  onClick,
}: IButton) => (
  <Button
    variant={variant}
    size={size}
    label={label}
    onClick={onClick}
  />
);

const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  variant: 'primary',
  size: 'medium',
  label: 'New',
  onClick: () => alert('Add button'),
};

const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  variant: 'secondary',
  size: 'small',
  label: 'Delete',
  onClick: () => alert('Delete button'),
};

const ButtonLarge = Template.bind({});
ButtonLarge.args = {
  variant: 'primary',
  size: 'large',
  label: 'Save ',
  onClick: () => alert('Save button'),
};

export { ButtonPrimary, ButtonSecondary, ButtonLarge };
