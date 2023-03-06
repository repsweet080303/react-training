import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardPlan from '@/components/common/Card/Plan';
import { ICardPlan } from '@/types/interfaces';

export default {
  title: 'PracticeOne/Common/CardPlan',
  component: CardPlan,
} as ComponentMeta<typeof CardPlan>;

const Template: ComponentStory<typeof CardPlan> = ({
  options,
  description,
  text,
}: ICardPlan) => (
  <CardPlan options={options} description={description} text={text} />
);

export const CardFree = Template.bind({});
CardFree.args = {
  options: 'FREE',
  description: 'Organize across all apps by hand',
  text: 'Slate helps you see how many more days you need...',
};
