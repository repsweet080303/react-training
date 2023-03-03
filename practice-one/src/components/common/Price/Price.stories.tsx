import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Price from '@/components/common/Price';
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
