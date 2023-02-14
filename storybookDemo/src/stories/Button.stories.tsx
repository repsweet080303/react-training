// import React from 'react';
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Example/Button',
  conponent: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}></Button>
);

export const Primary = Template;

Primary.args = {
  primary: true,
  size: 'large',
  label: 'Primary',
};

export const Secondary = Template.bind({});

Secondary.args = {
  label: 'Secondary',
}
