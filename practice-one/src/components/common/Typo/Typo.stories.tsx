import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Typo from '@/components/common/Typo';
import { ITypoProps } from '@/types/interfaces';

export default {
  title: 'PracticeOne/Common/Typo',
  component: Typo,
} as ComponentMeta<typeof Typo>;

const Template: ComponentStory<typeof Typo> = ({
  children,
  sizeTypo,
  statusTypo,
  tagTypo,
  weightTypo,
  classTypo,
}: ITypoProps) => (
  <Typo
    sizeTypo={sizeTypo}
    statusTypo={statusTypo}
    weightTypo={weightTypo}
    tagTypo={tagTypo}
    classTypo={classTypo}
  >
    {children}
  </Typo>
);

export const TagText = Template.bind({});
TagText.args = {
  sizeTypo: 'xs',
  statusTypo: 'typo__primary',
  weightTypo: 'typo__semibold',
  tagTypo: 'h6',
  children: 'For Better Future',
  classTypo: 'typo__tag',
};

export const HeaderText = Template.bind({});
HeaderText.args = {
  sizeTypo: 'xxl',
  statusTypo: 'typo__secondary',
  weightTypo: 'typo__bold',
  tagTypo: 'h1',
  children: 'HIGH QUALITY COURSES',
  classTypo: 'typo__head',
};

export const SubText = Template.bind({});
SubText.args = {
  sizeTypo: 'md',
  statusTypo: 'typo__paragraph',
  weightTypo: 'typo__medium',
  tagTypo: 'p',
  children: 'Every day brings with it a fresh set of learning possibilities.',
  classTypo: 'typo__sub',
};
