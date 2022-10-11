import classNames from 'classnames';
import { ThemeSwitcher } from 'features/theme';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink';
import React from 'react';
import cls from './Navbar.module.scss';

type NavbarProps = {
  className?: string;
};

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation(['about', 'main']);

  return (
    <header className={classNames(cls.Navbar, className)} data-testid="navbar">
      <div className={cls.links}>
        <AppLink to="/about">{t('about:about')}</AppLink>
        <AppLink to="/">{t('main:main')}</AppLink>
      </div>
      <ThemeSwitcher />
    </header>
  );
};
