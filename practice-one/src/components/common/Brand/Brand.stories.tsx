import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Brand, { IProps } from './index';

export default {
  title: 'PracticeOne/Common/Brand',
  component: Brand,
} as ComponentMeta<typeof Brand>;

const Template: ComponentStory<typeof Brand> = function ({
  href,
  title,
}: IProps) {
  return <Brand href={href} title={title} />;
};

export const Primary = Template.bind({});

Primary.args = {
  href: '#',
  title: 'Brandname',
};
