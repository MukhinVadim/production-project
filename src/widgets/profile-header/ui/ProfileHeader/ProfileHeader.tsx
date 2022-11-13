import classNames from 'classnames';
import { userAuthDataSelector } from 'entities/user';
import { ProfileForm } from 'features/profile-form';
import React from 'react';
import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { useToggle } from 'shared/lib/hooks/useToggle';
import { Avatar } from 'shared/ui/Avatar';
import { Button } from 'shared/ui/Button';
import EditIcon from 'shared/ui/icons/edit.svg';
import ArrowBackIcon from 'shared/ui/icons/arrowBackIcon.svg';
import { Text } from 'shared/ui/Text';
import cls from './ProfileHeader.module.scss';

type ProfileHeaderProps = {
  className?: string;
};

export const ProfileHeader: React.FC<ProfileHeaderProps> = (props) => {
  const { className } = props;
  const user = useAppSelector(userAuthDataSelector);
  const [isEdit, toggleEdit] = useToggle();

  return (
    <div
      className={classNames(cls.ProfileHeader, className)}
      data-testid="profile-header"
    >
      {isEdit ? (
        <>
          <Button onClick={toggleEdit} onlyIcon variant="ghost">
            <ArrowBackIcon />
          </Button>
          <ProfileForm onSuccess={toggleEdit} />
        </>
      ) : (
        <div className={cls.headerWrapper}>
          <Button
            onClick={toggleEdit}
            onlyIcon
            variant="ghost"
            className={cls.editButton}
          >
            <EditIcon />
          </Button>
          <Avatar
            src={user?.photoURL ?? ''}
            alt="avatar"
            height={200}
            width={200}
          />
          <Text as="h1" size="l" weight="bold" className={cls.name}>
            {user?.displayName}
          </Text>
        </div>
      )}
    </div>
  );
};
