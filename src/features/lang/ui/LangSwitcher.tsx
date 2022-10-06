import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/ui/Button';

type LangSwitcherProps = {
    className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation('translation');

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={className}
      onClick={toggle}
      variant={ButtonVariant.OUTLINE}
    >
      {t('language')}
    </Button>
  );
};
