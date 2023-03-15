// React
import React from 'react';

// Storybook
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import CardProduct from '@/components/common/Card/Product';

// Interface
import { ICardProduct } from '@/types/interfaces';

export default {
  title: 'PracticeOne/Common/Card/Product',
  component: CardProduct,
} as ComponentMeta<typeof CardProduct>;

const Template: ComponentStory<typeof CardProduct> = ({
  imageHeader,
  tag,
  alt,
  title,
  description,
  downloaded,
  vote,
  newPrice,
  oldPrice,
}: ICardProduct) => (
  <CardProduct
    imageHeader={imageHeader}
    tag={tag}
    alt={alt}
    title={title}
    description={description}
    downloaded={downloaded}
    vote={vote}
    newPrice={newPrice}
    oldPrice={oldPrice}
  />
);

export const TrainingProduct = Template.bind({});
TrainingProduct.args = {
  imageHeader: 'src/assets/images/keyboard-cover.png',
  tag: 'Training Courses',
  alt: 'keyboard cover',
  title: 'Video in Live Action',
  description:
    "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  downloaded: 15,
  vote: 4.5,
  newPrice: 16.48,
  oldPrice: 6.48,
};

export const BooksProduct = Template.bind({});
BooksProduct.args = {
  ...TrainingProduct.args,
  imageHeader: 'src/assets/images/pencil-cover.png',
  tag: 'Books Liberary',
  alt: 'pencil cover',
  title: 'Every Client Matters',
};

export const CetifiedProduct = Template.bind({});
CetifiedProduct.args = {
  ...TrainingProduct.args,
  imageHeader: 'src/assets/images/color-pencil-cover.png',
  tag: 'Certified Teacher',
  alt: 'pencil color cover',
  title: 'Get Quality Education',
};
