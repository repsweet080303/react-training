import { ReactNode } from 'react';
import { TButtonSize, TButtonVariant } from '@/types/index';

// Responsive API
interface IUserResponse<T> {
  data: T[] | null,
  error: string | null,
}

export default IUserResponse;
// Button
interface IButton {
  variant: TButtonVariant,
  size: TButtonSize,
  label: string
  icon?: ReactNode,
  onClick?: () => void,
}

export type { IUserResponse, IButton };
