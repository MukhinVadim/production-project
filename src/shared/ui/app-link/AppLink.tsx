import classNames from 'classnames';
import { NavLink, NavLinkProps } from 'react-router-dom';
import React from 'react';
import cls from './AppLink.module.scss';

type AppLinkProps = {
    className?: string;
} & NavLinkProps

export const AppLink: React.FC<AppLinkProps> = (props) => {
  const { className, children, ...restProps } = props;
  return (
    <NavLink
      {...restProps}
      className={({ isActive }) => classNames(cls.AppLink, className, { [cls.isActive]: isActive })}
      end
    >
      { children }
    </NavLink>
  );
};
