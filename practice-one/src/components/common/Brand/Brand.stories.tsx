// React
import React from 'react';

// Storybook
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import Brand from '@/components/common/Brand';

// Interface
import { IBrandProps } from '@/types/interfaces';

export default {
  title: 'PracticeOne/Common/Brand',
  component: Brand,
} as ComponentMeta<typeof Brand>;

const Template: ComponentStory<typeof Brand> = ({
  href,
  title,
}: IBrandProps) => <Brand href={href} title={title} />;

export const Primary = Template.bind({});

Primary.args = {
  href: '#',
  title: 'Brandname',
};
