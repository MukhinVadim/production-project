import { userActions } from 'entities/user';
import { getAuth } from 'firebase/auth';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

export const useSignOut = () => {
  const dispatch = useAppDispatch();
  const { resetUser } = userActions;

  const signOutCallback = useCallback(() => {
    const auth = getAuth();

    auth.signOut();
    dispatch(resetUser());
  }, [dispatch, resetUser]);

  return signOutCallback;
};
