import classNames from "classnames"
import { Link, LinkProps } from "react-router-dom"
import cls from './AppLink.module.scss'

type AppLinkProps = {
    className?: string;
} & LinkProps

export const AppLink: React.FC<AppLinkProps> = (props) => {

  const {className, children, ...restProps} = props;
  return (
    <Link
      {...restProps}
      className={classNames(cls.AppLink, className)}
     >
      { children }
    </Link>
  )
}