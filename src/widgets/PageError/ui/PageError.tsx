import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/buttons';
import cls from './PageError.module.scss';

type PageErrorProps = {
    className?: string;
}

export const PageError: React.FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation('translation');

  const onReload = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.PageError, className)}>
      {t('somethingWentWrong')}
      <Button onClick={onReload}>
        {t('reload')}
      </Button>
    </div>
  );
};
