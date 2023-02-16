// import React from 'react';
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Example/Button',
  conponent: Button,
  args: {
    primary: true,
  },
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
};

export const Large = Template.bind({});

Large.args = {
  primary: false,
  label: 'Big',
  size: 'large',
};

export const Small = Template.bind({});

Small.args = {
  ...Large.args,
  size: 'small',
}
