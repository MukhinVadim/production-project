import {
  ReducersMapObject,
  configureStore,
  PreloadedState,
  StateFromReducersMapObject,
} from '@reduxjs/toolkit';
import { createReducerManager } from 'app/providers/store/reducerManager';
import { userReducer } from 'entities/user';
import { SignInState } from 'features/auth-by-email';

export type AsyncStateModules = {
  signIn: SignInState;
};

const staticReducers = {
  user: userReducer,
};

export function setupStore(
  // eslint-disable-next-line no-use-before-define
  preloadedState?: PreloadedState<RootState>,
  // eslint-disable-next-line no-use-before-define
  reducers?: ReducersMapObject<RootState>
) {
  const reducerManager = createReducerManager({
    ...staticReducers,
    ...reducers,
  });

  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState,
  });

  store.reducerManager = reducerManager;

  return store;
}

export type RootState = StateFromReducersMapObject<typeof staticReducers> &
  Partial<AsyncStateModules>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
