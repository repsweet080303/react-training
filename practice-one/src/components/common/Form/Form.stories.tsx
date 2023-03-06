import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Form from '@/components/common/Form';
import { IInput } from '@/types/interfaces';

export default {
  title: 'PracticeOne/Common/Input',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = ({
  children,
  placeholder,
  type,
}: IInput) => (
  <Form placeholder={placeholder} type={type}>{children}</Form>
);

export const FormPrimary = Template.bind({});
FormPrimary.args = {
  placeholder: 'Your Email',
  type: 'email',
  children: 'Subscribe',
};
