import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { ButtonVariant } from '../types';
import cls from './Button.module.scss';

type ButtonProps = {
    className?: string;
    children?: ReactNode;
    variant?: keyof typeof ButtonVariant;
    fullWidth?: boolean;
} & React.ComponentProps<'button'>

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    variant = 'solid',
    fullWidth,
    ...restProps
  } = props;

  const ownClassName = classNames(
    cls.Button,
    cls.reset,
    cls[variant],
    className,
    {
      [cls.fullWidth]: fullWidth,
    },
  );

  return (
    <button
      {...restProps}
      type="button"
      className={ownClassName}
    >
      {children}
    </button>
  );
};
