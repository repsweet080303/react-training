// React
import React from 'react';

// Storybook
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import CardPlan from '@/components/common/Card/Plan';

// Interface
import { listItemScope } from '@/constants';
import { ICardPlan } from '@/types/interfaces';

export default {
  title: 'PracticeOne/Common/Card/Plan',
  component: CardPlan,
} as ComponentMeta<typeof CardPlan>;

const Template: ComponentStory<typeof CardPlan> = ({
  options,
  description,
  text,
}: ICardPlan) => (
  <CardPlan options={options} description={description} text={text} listScope={listItemScope} />
);

export const CardFree = Template.bind({});
CardFree.args = {
  options: 'FREE',
  description: 'Organize across all apps by hand',
  text: 'Slate helps you see how many more days you need...',
};
