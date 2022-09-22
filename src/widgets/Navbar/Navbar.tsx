import classNames from "classnames"
import { ThemeSwitcher } from "features/ThemeSwitcher"
import { AppLink } from "shared/ui/AppLink"
import cls from './Navbar.module.scss'

type NavbarProps = {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({className}) => {
  return (
    <div className={classNames(cls.Navbar, className)}>
      <ThemeSwitcher/>
      <div className={cls.links}>
        <AppLink to={'/about'}>about</AppLink>
        <AppLink to={'/'}>main</AppLink>
      </div>
    </div>
  )
}
