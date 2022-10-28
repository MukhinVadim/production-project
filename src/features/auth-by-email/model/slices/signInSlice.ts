import { createSlice } from '@reduxjs/toolkit';
import { AuthError } from 'firebase/auth';
import { SignInState } from '../../types';
import { signIn } from '../api/signIn';

const initialState: SignInState = {};

export const signInSlice = createSlice({
  name: 'signIn',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signIn.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as AuthError;
    });
  },
});

export const { reducer: signInReducer, actions: signInActions } = signInSlice;
