import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Feedback from '@/components/common/Feedback';
import { IFeedback } from '@/types/interfaces';

export default {
  title: 'PracticeOne/Common/Feedback',
  component: Feedback,
} as ComponentMeta<typeof Feedback>;

const Template: ComponentStory<typeof Feedback> = ({
  name,
  children,
  job,
  url,
}: IFeedback) => <Feedback name={name} job={job} url={url}>{children}</Feedback>;

export const FeedbackUser = Template.bind({});
FeedbackUser.args = {
  name: 'Regina Miles',
  job: 'Designer',
  children:
    'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.',
  url: 'src/assets/images/avatar-one.jpg',
};
