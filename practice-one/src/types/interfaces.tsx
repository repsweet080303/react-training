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
}

export interface ICardCourse {
  modify: string,
  title: string;
  description: string;
}

export interface IStraightProps {
  additionalClass: TypeStraight;
}

export interface ILogoProps {
  href: string;
  addtionalClass: TypeLogoClass;
  size: TypeLogoSize;
  alt?: string;
}
