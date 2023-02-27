import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Brand from '@/components/common/Brand';
import { IBrandProps } from '@/types/interfaces';

export default {
  title: 'PracticeOne/Common/Brand',
  component: Brand,
} as ComponentMeta<typeof Brand>;

const Template: ComponentStory<typeof Brand> = function brand({
  href,
  title,
}: IBrandProps) {
  return <Brand href={href} title={title} />;
};

export const Primary = Template.bind({});

Primary.args = {
  href: '#',
  title: 'Brandname',
};
