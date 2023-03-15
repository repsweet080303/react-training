// React
import React from 'react';

// Storybook
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import Price from '@/components/common/Price';

// Interface
import { IPrice } from '@/types/interfaces';

export default {
  title: 'PracticeOne/Common/Price',
  component: Price,
} as ComponentMeta<typeof Price>;

const Template: ComponentStory<typeof Price> = ({ price, time }: IPrice) => (
  <Price price={price} time={time} />
);

export const PriceInMonth = Template.bind({});
PriceInMonth.args = {
  price: 19,
  time: 'Per Month',
};
