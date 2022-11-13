import classNames from 'classnames';
import React from 'react';
import { ProfileHeader } from 'widgets/profile-header/ui/ProfileHeader';
import cls from './ProfilePage.module.scss';

type ProfilePageProps = {
  className?: string;
};

const ProfilePage: React.FC<ProfilePageProps> = (props) => {
  const { className } = props;

  return (
    <div
      className={classNames(cls.ProfilePage, className)}
      data-testid="profile-page"
    >
      <ProfileHeader />
    </div>
  );
};

export default ProfilePage;
