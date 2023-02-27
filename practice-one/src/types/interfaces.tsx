import React, { ReactNode } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import {
  TypeVariant,
  TypeSize,
  TypeButton,
  TypeItemTag,
  TypeList,
} from '@/types';

export interface IconProps extends Omit<FontAwesomeIconProps, 'icon'> {
  icon: IconDefinition;
  additionalClass: string;
}

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
