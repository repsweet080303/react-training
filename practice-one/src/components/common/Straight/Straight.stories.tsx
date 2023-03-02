import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Straight from '@/components/common/Straight';
import { IStraightProps } from '@/types/interfaces';

export default {
  title: 'PracticeOne/Common/Straight',
  component: Straight,
} as ComponentMeta<typeof Straight>;

const Template: ComponentStory<typeof Straight> = ({
  additionalClass,
}: IStraightProps) => (
  <Straight additionalClass={additionalClass} />
);

export const StraightMedium = Template.bind({});
StraightMedium.args = {
  additionalClass: 'straight__medium',
};

export const StraightLong = Template.bind({});
StraightLong.args = {
  additionalClass: 'straight__long',
};
