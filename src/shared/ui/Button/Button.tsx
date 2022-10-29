import classNames from 'classnames';
import React, { ElementType, memo, ReactNode } from 'react';
import cls from './Button.module.scss';

enum ButtonVariant {
  'outline',
  'ghost',
  'solid',
}

type ButtonOwnProps<E extends ElementType = ElementType> = {
  className?: string;
  children?: ReactNode;
  variant?: keyof typeof ButtonVariant;
  fullWidth?: boolean;
  onlyIcon?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  as?: E;
};

export type ButtonProps<E extends ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps<E>>;

const defaultElement = 'button';

export const Button = memo(
  <E extends ElementType = 'button'>(props: ButtonProps<E>) => {
    const {
      className,
      children,
      variant = 'solid',
      fullWidth,
      onlyIcon,
      leftIcon,
      rightIcon,
      as,
      ...restProps
    } = props;
    const Component = as || defaultElement;

    const ownClassName = classNames(
      cls.Button,
      cls.reset,
      cls[variant],
      className,
      {
        [cls.fullWidth]: fullWidth,
        [cls.onlyIcon]: onlyIcon,
      }
    );

    return (
      <Component type="button" {...restProps} className={ownClassName}>
        {leftIcon}
        {children}
        {rightIcon}
      </Component>
    );
  }
);
