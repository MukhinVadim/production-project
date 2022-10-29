import classNames from 'classnames';
import React, { memo } from 'react';
import { Theme, useTheme } from 'shared/lib/theme-provider';
import { Button } from 'shared/ui/Button';
import Moon from 'shared/ui/icons/moon.svg';
import Sun from 'shared/ui/icons/sun.svg';

type ThemeSwitcherProps = {
  className?: string;
};

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = memo(
  ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
      <Button
        className={classNames(className)}
        onClick={toggleTheme}
        variant="ghost"
        onlyIcon
      >
        {theme === Theme.LIGHT ? <Sun /> : <Moon />}
      </Button>
    );
  }
);
