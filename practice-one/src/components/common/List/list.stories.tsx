import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import List from '@/components/common/List';
import { IListProps } from '@/types/interfaces';
import listNavigation from '@/constants';

export default {
  title: 'PracticeOne/Common/List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = ({
  additionalClass,
}: IListProps) => <List additionalClass={additionalClass} listItem={listNavigation} />;

export const ListRow = Template.bind({});
ListRow.args = {
  additionalClass: 'list--row',
};

export const ListColumn = Template.bind({});
ListColumn.args = {
  additionalClass: 'list--column',
};
