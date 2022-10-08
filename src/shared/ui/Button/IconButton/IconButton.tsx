import classNames from 'classnames';
import React, { ReactElement } from 'react';
import { ButtonVariant } from 'shared/ui/button/types';
import cls from './IconButton.module.scss';

type IconButtonProps = {
  icon: ReactElement;
  className?: string;
  variant?: ButtonVariant;
} & React.ComponentProps<'button'>

export const IconButton: React.FC<IconButtonProps> = (props) => {
  const {
    className,
    children,
    icon,
    variant = ButtonVariant.SOLID,
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
