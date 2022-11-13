import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from 'entities/user/types';
import { User } from 'firebase/auth';

const initialState: UserState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    resetUser: () => initialState,
  },
});

export const { reducer: userReducer, actions: userActions } = userSlice;
