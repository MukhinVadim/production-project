import classNames from 'classnames';
import React, { ElementType, ReactNode } from 'react';
import cls from './Text.module.scss';

enum Colors {
  'primary',
  'secondary',
}

enum Sizes {
  'xs',
  's',
  'm',
  'l',
}

enum Weight {
  'light',
  'regular',
  'bold',
}

type TextOwnProps<E extends ElementType = ElementType> = {
  as?: E;
  className?: string;
  children?: ReactNode;
  size?: keyof typeof Sizes;
  weight?: keyof typeof Weight;
  color?: keyof typeof Colors;
};

export type TextProps<E extends ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

const defaultElement = 'span';

export const Text = <E extends ElementType = typeof defaultElement>(
  props: TextProps<E>
) => {
  const {
    className,
    as,
    children,
    size = 'm',
    weight = 'regular',
    color = 'primary',
    ...restProps
  } = props;
  const Component = as || defaultElement;

  const ownClassName = classNames(
    cls.Text,
    className,
    cls[size],
    cls[weight],
    cls[color]
  );

  return (
    <Component {...restProps} className={ownClassName}>
      {children}
    </Component>
  );
};
