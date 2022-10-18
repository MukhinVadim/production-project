import { useAppSelector } from 'shared/lib/hooks/useAppSelector';
import { userAuthDataSelector } from 'entities/user';

export const useAuth = () => {
  const user = useAppSelector(userAuthDataSelector);

  return {
    isAuth: !!user,
    user,
  };
};
