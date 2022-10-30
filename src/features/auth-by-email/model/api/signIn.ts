import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/store/storeConfig';
import { userActions } from 'entities/user';
import { Inputs } from 'features/auth-by-email/types';
import {
  AuthError,
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';

export const signIn = createAsyncThunk<
  UserCredential,
  Inputs,
  ThunkConfig<AuthError>
>('authByEmail/signIn', async ({ email, password }, thunkApi) => {
  const { dispatch, rejectWithValue } = thunkApi;
  const auth = getAuth();
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    dispatch(userActions.setUser(response.user.providerData[0]));

    return response;
  } catch (e) {
    return rejectWithValue(e);
  }
});
