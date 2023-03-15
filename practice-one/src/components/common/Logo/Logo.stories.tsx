// React
import React from 'react';

// Storybook
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Component
import Logo from '@/components/common/Logo';

// Interface
import { ILogoProps } from '@/types/interfaces';

export default {
  title: 'PracticeOne/Common/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = ({
  addtionalClass,
  href,
  size,
  alt,
}: ILogoProps) => (
  <Logo href={href} addtionalClass={addtionalClass} alt={alt} size={size} />
);

export const LogoRedit = Template.bind({});
LogoRedit.args = {
  href: 'src/assets/images/redit.jpg',
  alt: 'Logo Redit',
  size: 'md',
};

export const LogoHooli = Template.bind({});
LogoHooli.args = {
  href: 'src/assets/images/hooli.jpg',
  alt: 'Logo Hooli',
};
