/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button } from 'shared/ui/Button';
import { useToggle } from 'shared/lib/hooks/useToggle';
import { Modal } from 'shared/ui/Modal';

const MainPage: React.FC = () => {
  const { t } = useTranslation('main');
  const [isModal, toggleModal] = useToggle();

  return (
    <div>
      {t('main')}
      <Button onClick={toggleModal}>Open modal</Button>
      <Modal isOpen={isModal} onClose={toggleModal}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
        fuga sit ipsam non veritatis, corporis ad assumenda? Quasi in rerum
        dolorem esse non dolor id inventore alias, harum nemo minus?
      </Modal>
    </div>
  );
};

export default MainPage;
