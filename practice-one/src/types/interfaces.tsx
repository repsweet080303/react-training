import React, { ReactNode } from 'react';
import {
  TypeVariant, TypeSize, TypeButton, TypeTag, TypeItemTag, TypeList,
} from '@/types';

export interface IBrandProps {
  href?: string;
  title: string;
}

export interface IButtonProps {
  variant: TypeVariant;
  size: TypeSize;
  type?: TypeButton;
  children?: ReactNode;
  title?: string;
  href?: string;
  tag?: TypeTag;
  onClick?: (event: React.MouseEvent) => void;
}

export interface IListItemProps {
  tagName: TypeItemTag;
  href?: string;
  title: string;
}

export interface IListProps {
  className: TypeList;
  listItem: IListItemProps[];
}
