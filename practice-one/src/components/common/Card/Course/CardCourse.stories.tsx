import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardCourse from '@/components/common/Card/Course';
import { ICardCourse } from '@/types/interfaces';

export default {
  title: 'PracticeOne/Common/CardCourse',
  component: CardCourse,
} as ComponentMeta<typeof CardCourse>;

const Template: ComponentStory<typeof CardCourse> = ({
  description,
  modify,
  title,
}: ICardCourse) => (
  <CardCourse modify={modify} title={title} description={description} />
);

export const CardExpert = Template.bind({});
CardExpert.args = {
  modify: 'expert',
  title: 'Expert instruction',
  description:
    'The gradual accumulation of information about atomic and small-scale behaviour...',
};

export const CardTraining = Template.bind({});
CardTraining.args = {
  modify: 'training',
  title: 'Training Courses',
  description:
    'The gradual accumulation of information about atomic and small-scale behaviour...',
};

export const CardLifetime = Template.bind({});
CardLifetime.args = {
  modify: 'life',
  title: 'Lifetime access',
  description:
    'The gradual accumulation of information about atomic and small-scale behaviour...',
};
