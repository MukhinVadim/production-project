/* eslint-disable i18next/no-literal-string */
import classNames from 'classnames';
import { LangSwitcher } from 'features/lang/ui/LangSwitcher';
import React from 'react';
import { useToggle } from 'shared/lib/hooks/useToggle';
import { ButtonVariant, IconButton } from 'shared/ui/button';
import ArrowLeftIcon from 'shared/ui/icons/arrowLeftIcon.svg';
import cls from './Sidebar.module.scss';

type SidebarProps = {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, toggleCollapse] = useToggle();

  return (
    <div
      className={classNames(cls.Sidebar, className, {
        [cls.collapsed]: collapsed,
      })}
      data-testid="sidebar"
    >
      <div className={cls.sidebarToggle}>
        <IconButton
          onClick={toggleCollapse}
          variant={ButtonVariant.OUTLINE}
          icon={(
            <ArrowLeftIcon
              width={20}
              height={20}
              className={classNames(cls.icon, { [cls.iconCollapsed]: collapsed })}
            />
)}
        />
      </div>
      <div className={cls.switchers}>
        <LangSwitcher isCollapsed={collapsed} />
      </div>
    </div>
  );
};
