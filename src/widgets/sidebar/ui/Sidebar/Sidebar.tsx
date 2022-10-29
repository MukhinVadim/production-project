/* eslint-disable i18next/no-literal-string */
import classNames from 'classnames';
import { LangSwitcher } from 'features/lang/ui/LangSwitcher';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useToggle } from 'shared/lib/hooks/useToggle';
import { Button } from 'shared/ui/Button';
import ArrowLeftIcon from 'shared/ui/icons/arrowLeftIcon.svg';
import { SidebarItem } from 'widgets/sidebar/ui/SidebarItem';
import ProfileIcon from 'shared/ui/icons/profileIcon.svg';
import { AppRoutes } from 'shared/config';
import cls from './Sidebar.module.scss';

type SidebarProps = {
  className?: string;
};

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [collapsed, toggleCollapse] = useToggle();
  const { t } = useTranslation('translation');

  return (
    <div
      className={classNames(cls.Sidebar, className, {
        [cls.collapsed]: collapsed,
      })}
      data-testid="sidebar"
    >
      <div className={cls.sidebarToggle}>
        <Button onClick={toggleCollapse} variant="ghost" onlyIcon>
          <ArrowLeftIcon
            width={20}
            height={20}
            className={classNames(cls.icon, { [cls.iconCollapsed]: collapsed })}
          />
        </Button>
      </div>
      <SidebarItem
        isCollapsed={collapsed}
        to={AppRoutes.PROFILE}
        leftIcon={<ProfileIcon />}
      >
        {t('profilePage')}
      </SidebarItem>
      <div className={cls.switchers}>
        <LangSwitcher isCollapsed={collapsed} />
      </div>
    </div>
  );
};
