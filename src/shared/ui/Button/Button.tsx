import classNames from 'classnames';
import React, { ReactNode } from 'react';
import cls from './Button.module.scss';

export enum ButtonVariant {
  SOLID = 'solid',
  OUTLINE = 'outline',
  GHOST = 'ghost'
}

type ButtonProps = {
    className?: string;
    children?: ReactNode;
    variant?: ButtonVariant;
} & React.ComponentProps<'button'>

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    variant,
    ...restProps
  } = props;

  return (
    <button
      {...restProps}
      type="button"
      className={classNames(
        cls.Button,
        cls.reset,
        cls[variant],
        className,
      )}
    >
      {children}
    </button>
  );
};
