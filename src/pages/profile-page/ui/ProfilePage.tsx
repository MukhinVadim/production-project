import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ProfilePage.module.scss';

type ProfilePageProps = {
  className?: string;
};

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const { t } = useTranslation('translation');
  const { className } = props;

  return (
    <div
      className={classNames(cls.ProfilePage, className)}
      data-testid="profile-page"
    >
      {t('profilePage')}
    </div>
  );
};

export default ProfilePage;
