import classNames from 'classnames';
import { LangSwitcher } from 'features/lang/ui/LangSwitcher';
import { useToggle } from 'shared/lib/hooks/useToggle';
import { Button } from 'shared/ui/Button';
import React from 'react';
import cls from './Sidebar.module.scss';

type SidebarProps = {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, toggleCollapse] = useToggle();

  return (
    <div className={classNames(cls.Sidebar, className, {
      [cls.collapsed]: collapsed,
    })}
    >
      <Button onClick={toggleCollapse} data-testid="sidebar">
        toggle
      </Button>
      <div className={cls.switchers}>
        <LangSwitcher />
      </div>
    </div>
  );
};
