import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Label from '@/components/common/Label';
import { ILabelProps } from '@/types/interfaces';

export default {
  title: 'PracticeOne/Common/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = ({
  title,
  size,
}: ILabelProps) => (
  <Label title={title} size={size} />
);

export const LabelSmall = Template.bind({});
LabelSmall.args = {
  size: 'sm',
  title: 'Sale',
};

export const LabelMedium = Template.bind({});
LabelMedium.args = {
  ...LabelSmall.args,
  size: 'md',
};
