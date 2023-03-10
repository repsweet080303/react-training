// React
import React from 'react';

// Storybook
import { ComponentMeta, ComponentStory } from '@storybook/react';

// Component
import User from '@/components/common/User';

// Interface
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

export const UserLmonid = Template.bind({});
UserLmonid.args = {
  ...UserMiles.args,
  url: 'src/assets/images/avatar-two.jpg',
};

export const UserTom = Template.bind({});
UserTom.args = {
  ...UserMiles.args,
  url: 'src/assets/images/avatar-three.png',
};
