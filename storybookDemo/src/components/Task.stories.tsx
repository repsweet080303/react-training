import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Task from './Task';

export default {
  title: 'Example/Task',
  component: Task,
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args}></Task>;

export const Default = Template.bind({});

Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
};

export const Pinned = Template.bind({});

Pinned.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});

Archived.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_ARCHIVED',
  },
};
