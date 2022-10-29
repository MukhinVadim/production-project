import { userActions } from 'entities/user';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Inputs } from 'features/auth-by-email/types';
import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
} from 'firebase/auth';

export const signIn = createAsyncThunk<UserCredential, Inputs>(
  'authByEmail/signIn',
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    const auth = getAuth();
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      dispatch(userActions.setUser(response.user.providerData[0]));
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
