import classNames from 'classnames';
import { LoginModal, useAuth, useSignOut } from 'features/auth-by-email';
import { ThemeSwitcher } from 'features/theme';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useToggle } from 'shared/lib/hooks/useToggle';
import { AppLink } from 'shared/ui/AppLink';
import { Button } from 'shared/ui/Button';
import cls from './Navbar.module.scss';

type NavbarProps = {
  className?: string;
};

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isAuthPopupOpen, toggleAuthPopup] = useToggle();
  const { t } = useTranslation(['about', 'main', 'translation']);
  const { isAuth, user } = useAuth();
  const signOut = useSignOut();

  return (
    <header className={classNames(cls.Navbar, className)} data-testid="navbar">
      <div className={cls.links}>
        <AppLink to="/about">{t('about:about')}</AppLink>
        <AppLink to="/">{t('main:main')}</AppLink>
      </div>
      <ThemeSwitcher />
      {isAuth ? (
        <>
          {user?.email}
          <Button onClick={signOut}>{t('translation:signOut')}</Button>
        </>
      ) : (
        <Button onClick={toggleAuthPopup}>{t('translation:signIn')}</Button>
      )}
      <LoginModal isOpen={isAuthPopupOpen} onClose={toggleAuthPopup} />
    </header>
  );
};
