/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button } from 'shared/ui/button';
import { useToggle } from 'shared/lib/hooks/useToggle';

const MainPage: React.FC = () => {
  const { t } = useTranslation('main');
  const [toggle, setToggle] = useToggle();

  if (toggle) {
    throw new Error('boom');
  }

  return (
    <div>
      {t('main')}
      {' '}
      <Button
        onClick={setToggle}
      >
        boom
      </Button>

    </div>
  );
};

export default MainPage;
