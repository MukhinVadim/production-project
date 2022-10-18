import { UserInfo } from 'firebase/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from 'entities/user/types';

const initialState: UserState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInfo>) => {
      state.user = action.payload;
    },
    resetUser: () => initialState,
  },
});

export const { reducer: userReducer, actions: userActions } = userSlice;
