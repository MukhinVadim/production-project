import classNames from 'classnames';
import React from 'react';
import { Theme, useTheme } from 'shared/lib/theme-provider';
import { IconButton } from 'shared/ui/buttons';
import Moon from 'shared/ui/icons/moon.svg';
import Sun from 'shared/ui/icons/sun.svg';

type ThemeSwitcherProps = {
    className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      className={classNames(className)}
      onClick={toggleTheme}
      variant="ghost"
      icon={theme === Theme.LIGHT ? <Sun /> : <Moon />}
    />
  );
};
