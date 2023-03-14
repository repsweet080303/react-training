import { ReactNode } from 'react';
import { TButtonSize, TButtonVariant } from '@/types/index';

// Responsive API
interface IUserResponse<T> {
  data: T[] | null,
  error: string | null,
}

// Button
interface IButton {
  variant: TButtonVariant,
  size: TButtonSize,
  children: ReactNode,
  onClick?: () => void,
}

export type { IUserResponse, IButton };
