import React, { ReactNode } from 'react';
import classNames from 'classnames';
import cls from './FormErrorMessage.module.scss';

type FormErrorMessageProps = {
  className?: string;
  children?: ReactNode;
};

export const FormErrorMessage: React.FC<FormErrorMessageProps> = (props) => {
  const { className, children } = props;

  return (
    <div className={classNames(cls.FormErrorMessage, className)}>
      {children}
    </div>
  );
};
