// React
import React, { ReactNode } from 'react';

// FontAwesome
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

// Types
import {
  TButtonVariant,
  TButtonSize,
  TButton,
  TItemTag,
  TList,
  TTypoClass,
  TTypoStatus,
  TTypoWeight,
  TTypoSize,
  TTypoTag,
  TStraight,
  TLogoClass,
  TLogoSize,
  TLabelSize,
  TItemIcon,
  TOptionsPlan,
  TForm,
  TImageSize,
  TModifyCourse,
} from '@/types';

// Interface brand
export interface IBrandProps {
  href?: string;
  title: string;
}

// Interface button
export interface IButtonProps {
  additionalClass?: string;
  variant: TButtonVariant;
  size: TButtonSize;
  type: TButton;
  children?: ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}

// Interface icon
export interface IconProps extends Omit<FontAwesomeIconProps, 'icon'> {
  icon: IconDefinition;
  additionalClass: string;
  onClick?: (e: React.MouseEvent) => void;
}

// Interface list
export interface IListProps {
  id?: number;
  title?: string;
  additionalClass?: TList;
  listItem: IListItemProps[];
}

// Interface list item
export interface IListItemProps
  extends Pick<IImage, 'img' | 'imageClass' | 'size'> {
  id?: number;
  itemClass?: string;
  tagName: TItemTag;
  href?: string;
  text: string;
  icon?: string;
}

// Interface typo
export interface ITypoProps {
  children: ReactNode;
  classTypo?: TTypoClass;
  statusTypo: TTypoStatus;
  weightTypo: TTypoWeight;
  sizeTypo: TTypoSize;
  tagTypo: TTypoTag;
  additionalTypo?: string;
}

// Interface straight
export interface IStraightProps {
  additionalClass: TStraight;
}

// Interface logo
export interface ILogoProps {
  href: string;
  addtionalClass: TLogoClass;
  size?: TLogoSize;
  alt?: string;
}

// Interface label
export interface ILabelProps {
  title: string;
  size: TLabelSize;
  additionalClass?: string;
}

// Interface card course
export interface ICardCourse {
  id?: number;
  modify: TModifyCourse;
  title: string;
  description: string;
}

// Interface card product
export interface ICardProduct {
  imageHeader: string;
  alt: string;
  tag: string;
  title: string;
  vote: number;
  description: string;
  downloaded: number;
  oldPrice: number;
  newPrice: number;
}

// Interface card plan
export interface ICardPlan {
  options: TOptionsPlan;
  description: string;
  text: string;
  listScope: IListScope[];
}

// Interface price
export interface IPrice {
  price: number;
  time: string;
}

// Interface scope
export interface IScope {
  typeScope: TItemIcon;
  icon: IconDefinition;
  children: ReactNode;
}

// Interface lis scope
export interface IListScope {
  id: number;
  type: TItemIcon;
  text: string;
}

// Interface user
export interface IUser {
  url: string;
  alt?: string;
  name: ReactNode;
  job: ReactNode;
}

// Interface feedback
export interface IFeedback {
  name: string;
  job: string;
  children: ReactNode;
  url: string;
  alt?: string;
}

// Interface input
export interface IInput {
  placeholder: string;
  type: TForm;
  children: ReactNode;
}

// Interface image
export interface IImage {
  img?: string;
  imageClass?: string;
  alt?: string;
  size?: TImageSize;
}
