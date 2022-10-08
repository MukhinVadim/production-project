import classNames from 'classnames';
import { Spinner } from 'shared/ui/spinner';
import cls from './PagePreloader.module.scss';

type PagePreloaderProps = {
    className?: string;
}

export const PagePreloader: React.FC<PagePreloaderProps> = ({ className }) => (
  <div className={classNames(cls.PagePreloader, className)}>
    <Spinner />
  </div>
);
