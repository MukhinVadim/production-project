import { userActions } from 'entities/user';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// TODO:need to add loading flags
export const useInitAuth = () => {
  const dispatch = useDispatch();
  const { setUser } = userActions;

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.providerData[0]));
      }
    });
  }, []);
};
