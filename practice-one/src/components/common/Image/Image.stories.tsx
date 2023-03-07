import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Image from '@/components/common/Image';
import { IImage } from '@/types/interfaces';
import Phone from '@/assets/icons/phone.svg';
import MailBox from '@/assets/icons/mail-box.svg';
import Location from '@/assets/icons/location.svg';

export default {
  title: 'PracticeOne/Common/Images',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = ({
  img,
  additionalClass,
  size,
  alt,
}: IImage) => (
  <Image img={img} additionalClass={additionalClass} size={size} alt={alt} />
);

export const PhoneImage = Template.bind({});
PhoneImage.args = {
  img: Phone,
  additionalClass: 'phone',
  size: 'md',
};

export const MailImage = Template.bind({});
MailImage.args = {
  img: MailBox,
  additionalClass: 'mailbox',
  size: 'md',
};

export const LocationImage = Template.bind({});
LocationImage.args = {
  img: Location,
  additionalClass: 'location',
  size: 'md',
};
