import classNames from 'classnames';
import React, { ReactElement } from 'react';
import { ButtonVariant } from '../types';
import cls from './IconButton.module.scss';

type IconButtonProps = {
  icon: ReactElement;
  className?: string;
  variant?: keyof typeof ButtonVariant;
} & React.ComponentProps<'button'>

export const IconButton: React.FC<IconButtonProps> = (props) => {
  const {
    className,
    children,
    icon,
    variant = 'solid',
    ...restProps
  } = props;

  return (
    <button
      {...restProps}
      type="button"
      className={classNames(
        cls.IconButton,
        cls.reset,
        cls[variant],
        className,
      )}
      data-testid="icon-button"
    >
      {icon}
    </button>
  );
};
