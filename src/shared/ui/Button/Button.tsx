import classNames from 'classnames';
import React, { ReactNode } from 'react';
import cls from './Button.module.scss';

type ButtonProps = {
    className?: string;
    children: ReactNode;
} & React.ComponentProps<'button'>

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    ...restProps
  } = props;

  return (
    <button
      {...restProps}
      type="button"
      className={classNames(cls.Button, cls.reset, className)}
    >
      {children}
    </button>
  );
};
