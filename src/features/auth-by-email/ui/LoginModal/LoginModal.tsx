import classNames from 'classnames';
import { PagePreloader } from 'features/page-preloader';
import React, { Suspense } from 'react';
import { Modal } from 'shared/ui/Modal';
import { ModalProps } from 'shared/ui/Modal/Modal';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginFormAsync';
import cls from './LoginModal.module.scss';

type LoginModalProps = {
  className?: string;
} & Pick<ModalProps, 'isOpen' | 'onClose'>;

export const LoginModal: React.FC<LoginModalProps> = (props) => {
  const { isOpen, onClose, className } = props;

  return (
    <Modal
      className={classNames(cls.LoginModal, className)}
      isOpen={isOpen}
      onClose={onClose}
    >
      <Suspense fallback={<PagePreloader />}>
        {isOpen && <LoginForm onSuccess={onClose} />}
      </Suspense>
    </Modal>
  );
};
