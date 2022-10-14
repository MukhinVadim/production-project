import { createSlice } from '@reduxjs/toolkit';
import { UserState } from 'entities/user/model/types';

const initialState: UserState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { reducer: userReducer, actions: userActions } = userSlice;
