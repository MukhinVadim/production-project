import React from 'react';
import classNames from 'classnames';
import cls from './Avatar.module.scss';

type AvatarProps = {
  className?: string;
} & React.ComponentProps<'img'>;

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { className, alt, ...restProps } = props;

  return (
    <img
      height={100}
      width={100}
      className={classNames(cls.Avatar, className)}
      data-testid="avatar"
      alt={alt}
      {...restProps}
    />
  );
};
