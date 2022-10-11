import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

type NotFoundPageProps = {
  className?: string;
};

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation('translation');

  return (
    <div className={classNames(cls.NotFoundPage, className)}>
      {t('pageNotFound')}
    </div>
  );
};
