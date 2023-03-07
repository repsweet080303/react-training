import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardProduct from '@/components/common/Card/Product';
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
  imageHeader: 'src/assets/images/pencil-cover.png',
  tag: 'Training Courses',
  alt: 'pencil cover',
  title: 'book Library',
  description:
    "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  downloaded: 15,
  vote: 4.5,
  newPrice: 16.48,
  oldPrice: 6.48,
};

export const CetifiedProduct = Template.bind({});
CetifiedProduct.args = {
  imageHeader: 'src/assets/images/color-pencil-cover.png',
  tag: 'Get Quality Education',
  alt: 'pencil color cover',
  title: 'book Library',
  description:
    "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  downloaded: 15,
  vote: 4.5,
  newPrice: 16.48,
  oldPrice: 6.48,
};
