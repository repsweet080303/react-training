import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import User from '@/components/common/User';
import { IUser } from '@/types/interfaces';

export default {
  title: 'PracticeOne/Common/User',
  component: User,
} as ComponentMeta<typeof User>;

const Template: ComponentStory<typeof User> = ({ url, name, job }: IUser) => (
  <User url={url} name={name} job={job} />
);

export const UserMiles = Template.bind({});
UserMiles.args = {
  name: 'Regina Miles',
  url: 'src/assets/images/avatar-one.jpg',
  job: 'Designer',
};

export const UserTom = Template.bind({});
UserTom.args = {
  name: 'Regina Miles',
  url: 'src/assets/images/avatar-two.jpg',
  job: 'Designer',
};
