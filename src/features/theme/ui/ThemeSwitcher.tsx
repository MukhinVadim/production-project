import { Theme, useTheme } from "shared/lib/theme-provider"
import classNames from "classnames"
import { Button } from "shared/ui/Button"
import cls from './ThemeSwitcher.module.scss'
import Sun from 'shared/ui/icons/sun.svg'
import Moon from 'shared/ui/icons/moon.svg'

type ThemeSwitcherProps = {
    className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({className}) => {
  const {theme, toggleTheme} = useTheme()

  return (
    <Button
        className={classNames(cls.ThemeSwitcher, className)}
        onClick={toggleTheme}
     >
      {theme === Theme.LIGHT ? <Sun/> : <Moon/>}
    </Button>
  )
}