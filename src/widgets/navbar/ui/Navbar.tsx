import classNames from 'classnames';
import { ThemeSwitcher } from 'features/theme';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/ui/AppLink';
import React from 'react';
import { Button } from 'shared/ui/Button';
import { useToggle } from 'shared/lib/hooks/useToggle';
import { LoginModal } from 'features/auth-by-user-name';
import cls from './Navbar.module.scss';

type NavbarProps = {
  className?: string;
};

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isAuthPopupOpen, toggleAuthPopup] = useToggle();
  const { t } = useTranslation(['about', 'main', 'translation']);

  return (
    <header className={classNames(cls.Navbar, className)} data-testid="navbar">
      <div className={cls.links}>
        <AppLink to="/about">{t('about:about')}</AppLink>
        <AppLink to="/">{t('main:main')}</AppLink>
      </div>
      <ThemeSwitcher />
      <Button onClick={toggleAuthPopup}>{t('translation:signIn')}</Button>
      <LoginModal isOpen={isAuthPopupOpen} onClose={toggleAuthPopup} />
    </header>
  );
};
