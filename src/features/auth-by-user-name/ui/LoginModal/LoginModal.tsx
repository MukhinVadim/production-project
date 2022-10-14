import React from 'react';
import classNames from 'classnames';
import { Modal } from 'shared/ui/Modal';
import { ModalProps } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'features/auth-by-user-name/ui/LoginForm';
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
      <LoginForm />
    </Modal>
  );
};
