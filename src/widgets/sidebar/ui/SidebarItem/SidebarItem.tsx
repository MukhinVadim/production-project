import classNames from 'classnames';
import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'shared/ui/Button';
import { ButtonProps } from 'shared/ui/Button/Button';
import cls from './SidebarItem.module.scss';

type SidebarItemProps = {
  className?: string;
  isCollapsed?: boolean;
} & Pick<ButtonProps<typeof NavLink>, 'leftIcon' | 'children' | 'to'>;

export const SidebarItem: React.FC<SidebarItemProps> = memo((props) => {
  const { className, to, children, isCollapsed, ...restProps } = props;

  return (
    <Button
      to={to}
      as={NavLink}
      variant="outline"
      className={classNames(cls.SidebarItem, className, {
        [cls.collapsed]: isCollapsed,
      })}
      {...restProps}
    >
      {!isCollapsed && children}
    </Button>
  );
});
