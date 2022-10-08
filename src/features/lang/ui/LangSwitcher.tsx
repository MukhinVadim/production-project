import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonVariant } from 'shared/ui/button';

type LangSwitcherProps = {
    className?: string;
    isCollapsed?: boolean;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ className, isCollapsed }) => {
  const { t, i18n } = useTranslation('translation');

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={className}
      onClick={toggle}
      variant={ButtonVariant.OUTLINE}
      fullWidth
    >
      {isCollapsed ? t('languageCollapsed') : t('language')}
    </Button>
  );
};
