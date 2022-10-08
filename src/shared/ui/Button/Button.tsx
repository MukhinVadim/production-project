import classNames from 'classnames';
import React, { ReactNode } from 'react';
import cls from './Button.module.scss';

enum ButtonVariant {
  'outline',
  'ghost',
  'solid'
}

type ButtonProps = {
    className?: string;
    children?: ReactNode;
    variant?: keyof typeof ButtonVariant;
    fullWidth?: boolean;
    onlyIcon?: boolean;
} & React.ComponentProps<'button'>

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    variant = 'solid',
    fullWidth,
    onlyIcon,
    ...restProps
  } = props;

  const ownClassName = classNames(
    cls.Button,
    cls.reset,
    cls[variant],
    className,
    {
      [cls.fullWidth]: fullWidth,
      [cls.onlyIcon]: onlyIcon,
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
