import React, { ReactNode } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  TypeVariant,
  TypeSize,
  TypeButton,
  TypeItemTag,
  TypeList,
  ClassTypo,
  StatusTypo,
  WeightTypo,
  SizeTypo,
  TagTypo,
  TypeStraight,
  TypeLogoClass,
  TypeLogoSize,
  TypeLabelSize,
  TypeItemIcon,
  TypeOptionsPlan,
} from '@/types';

export interface IBrandProps {
  href?: string;
  title: string;
}

export interface IButtonProps {
  variant: TypeVariant;
  size: TypeSize;
  type: TypeButton;
  children?: ReactNode;
  onClick?: (event: React.MouseEvent) => void;
}

export interface IconProps extends Omit<FontAwesomeIconProps, 'icon'> {
  icon: IconDefinition;
  additionalClass: string;
  onClick?: (e: React.MouseEvent) => void;
}

export interface IListItemProps {
  id?: number;
  tagName: TypeItemTag;
  href?: string;
  title: string;
}

export interface IListProps {
  additionalClass: TypeList;
  listItem: IListItemProps[];
}

export interface ITypoProps {
  children: ReactNode;
  classTypo?: ClassTypo;
  statusTypo: StatusTypo;
  weightTypo: WeightTypo;
  sizeTypo: SizeTypo;
  tagTypo: TagTypo;
  additionalTypo?: string;
}

export interface ICardCourse {
  modify: string;
  title: string;
  description: string;
}

export interface IStraightProps {
  additionalClass: TypeStraight;
}

export interface ILogoProps {
  href: string;
  addtionalClass: TypeLogoClass;
  size?: TypeLogoSize;
  alt?: string;
}

export interface ILabelProps {
  title: string;
  size: TypeLabelSize;
  additionalClass?: string;
}

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

export interface IPrice {
  price: number;
  time: string;
}

export interface IScope {
  typeScope: TypeItemIcon;
  icon: IconDefinition;
  children: ReactNode;
}

export interface IListScope {
  id: number;
  type: TypeItemIcon;
  text: string;
}

export interface ICardPlan {
  options: TypeOptionsPlan;
  description: string;
  text: string;
  listScope: IListScope[];
}

export interface IUser {
  url: string;
  alt?: string;
  name: ReactNode;
  job: ReactNode;
}

export interface IFeedback {
  name: string;
  job: string;
  comment: string;
  url: string;
  alt?: string;
}
