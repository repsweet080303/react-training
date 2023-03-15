// React
import React from 'react';

// Storybook
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import Image from '@/components/common/Image';

// Interface
import { IImage } from '@/types/interfaces';

export default {
  title: 'PracticeOne/Common/Images',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = ({
  img,
  imageClass,
  size,
  alt,
}: IImage) => (
  <Image img={img} imageClass={imageClass} size={size} alt={alt} />
);

export const PhoneImage = Template.bind({});
PhoneImage.args = {
  img: 'src/assets/icons/phone.svg',
  imageClass: 'phone',
  size: 'md',
};

export const MailImage = Template.bind({});
MailImage.args = {
  img: 'src/assets/icons/mail-box.svg',
  imageClass: 'mailbox',
  size: 'md',
};

export const LocationImage = Template.bind({});
LocationImage.args = {
  img: 'src/assets/icons/location.svg',
  imageClass: 'location',
  size: 'md',
};
