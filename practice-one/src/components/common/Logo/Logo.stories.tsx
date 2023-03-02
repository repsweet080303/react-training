import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Logo from '@/components/common/Logo';
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
