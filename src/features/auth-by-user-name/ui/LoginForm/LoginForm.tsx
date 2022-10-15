import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { useForm } from 'react-hook-form';
import cls from './LoginForm.module.scss';

export const LoginForm: React.FC = () => {
  const { t } = useTranslation('translation');
  const { register, handleSubmit, setFocus } = useForm();

  const onSubmit = (data: unknown) => console.log(data);

  useEffect(() => {
    setFocus('login');
  }, [setFocus]);

  return (
    <form
      className={classNames(cls.LoginForm)}
      data-testid="login-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input type="text" placeholder={t('login')} {...register('login')} />
      <Input
        type="password"
        placeholder={t('password')}
        {...register('password')}
      />
      <div className={cls.submitButtonWrapper}>
        <Button type="submit">{t('signIn')}</Button>
      </div>
    </form>
  );
};
