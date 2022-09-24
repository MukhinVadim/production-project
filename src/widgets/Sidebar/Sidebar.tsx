import classNames from "classnames"
import { useToggle } from "shared/lib/hooks/useToggle"
import cls from './Sidebar.module.scss'

type SidebarProps = {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({className}) => {
  const [collapsed, toggleCollapse] = useToggle()
  
  return (
    <div className={classNames(cls.Sidebar, className, {
      [cls.collapsed]: collapsed
    })}>
      <button onClick={toggleCollapse}>
        toggle
      </button>
      {/* <div className={cls.switchers}>

      </div> */}
    </div>
  )
}