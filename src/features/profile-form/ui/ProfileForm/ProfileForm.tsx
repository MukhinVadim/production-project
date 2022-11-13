import classNames from 'classnames';
import { userAuthDataSelector } from 'entities/user';
import { AuthError, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { Avatar } from 'shared/ui/Avatar';
import { Button } from 'shared/ui/Button';
import { FormErrorMessage } from 'shared/ui/FormErrorMessage';
import { TextField } from 'shared/ui/TextField';
import cls from './ProfileForm.module.scss';

type Inputs = {
  displayName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  photoURL?: string | null;
};

type ProfileFormProps = {
  className?: string;
  onSuccess?: () => void;
};

export const ProfileForm: React.FC<ProfileFormProps> = (props) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation('profile');
  const [serverError, setServerError] = useState<AuthError | null>(null);
  const user = useAppSelector(userAuthDataSelector);
  const { email, phoneNumber, photoURL, displayName } = user ?? {};
  const { register, reset, handleSubmit } = useForm<Inputs>({
    defaultValues: {
      displayName,
      email,
      phoneNumber,
      photoURL,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (user)
      try {
        await updateProfile(user, data);
        onSuccess?.();
      } catch (e) {
        setServerError(e as AuthError);
      }
  };

  useEffect(() => {
    reset({ email, phoneNumber, photoURL, displayName });
  }, [email, phoneNumber, photoURL, displayName]);

  return (
    <div
      className={classNames(cls.ProfileForm, className)}
      data-testid="profile-form"
    >
      <div className={cls.avatarWrapper}>
        <Avatar src={photoURL ?? ''} alt="avatar" height={100} width={100} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
        <TextField label={t('photoUrl')} {...register('photoURL')} />
        <TextField
          {...register('displayName')}
          label={t('displayName')}
          required
        />
        {serverError && <FormErrorMessage>{t('serverError')}</FormErrorMessage>}
        <div className={cls.buttonWrapper}>
          <Button type="submit">{t('saveButton')}</Button>
        </div>
      </form>
    </div>
  );
};
