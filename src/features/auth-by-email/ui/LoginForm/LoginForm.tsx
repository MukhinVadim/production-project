import classNames from 'classnames';
import { signIn } from 'features/auth-by-email/model/api/signIn';
import { signInSelector } from 'features/auth-by-email/model/selectors/selectors';
import { signInReducer } from 'features/auth-by-email/model/slices/signInSlice';
import { Inputs } from 'features/auth-by-email/types';
import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { errorCodes } from 'shared/config';
import { DynamicModuleLoader } from 'shared/lib/dynamic-module-loader/DynamicModuleLoader';
import { ErrorBoundary } from 'shared/lib/error-boundary';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { Button } from 'shared/ui/Button';
import { FormErrorMessage } from 'shared/ui/FormErrorMessage';
import { Input } from 'shared/ui/Input';
import cls from './LoginForm.module.scss';

type LoginFormProps = {
  onSuccess?: () => void;
};

const initialReducers = {
  signIn: signInReducer,
};

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const { t } = useTranslation('translation');
  const dispatch = useAppDispatch();
  const { register, handleSubmit, setFocus } = useForm<Inputs>();
  const { error } = useAppSelector(signInSelector) ?? {};

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) =>
    dispatch(signIn({ email, password, onSuccess }));

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  return (
    <ErrorBoundary fallback="something went wrong...">
      <DynamicModuleLoader reducers={initialReducers}>
        <form
          className={classNames(cls.LoginForm)}
          data-testid="login-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input type="text" placeholder={t('login')} {...register('email')} />
          <Input
            type="password"
            placeholder={t('password')}
            {...register('password')}
          />
          {error && (
            <FormErrorMessage>
              {errorCodes[error?.code as keyof typeof errorCodes]}
            </FormErrorMessage>
          )}
          <div className={cls.submitButtonWrapper}>
            <Button type="submit">{t('signIn')}</Button>
          </div>
        </form>
      </DynamicModuleLoader>
    </ErrorBoundary>
  );
};

export default LoginForm;
