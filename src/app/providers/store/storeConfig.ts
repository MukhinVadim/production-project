import {
  configureStore,
  PreloadedState,
  ReducersMapObject,
  StateFromReducersMapObject,
} from '@reduxjs/toolkit';
import { createReducerManager } from 'app/providers/store/reducerManager';
import { userReducer } from 'entities/user';
import { SignInState } from 'features/auth-by-email';
import { NavigateFunction } from 'react-router-dom';

export type AsyncStateModules = {
  signIn: SignInState;
};

const staticReducers = {
  user: userReducer,
};

export function setupStore({
  preloadedState,
  reducers,
  navigate,
}: {
  // eslint-disable-next-line no-use-before-define
  preloadedState?: PreloadedState<RootState>;
  // eslint-disable-next-line no-use-before-define
  reducers?: Partial<ReducersMapObject<RootState>>;
  navigate?: NavigateFunction;
}) {
  const reducerManager = createReducerManager({
    ...staticReducers,
    ...reducers,
  });

  const store = configureStore({
    reducer: reducerManager.reduce,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            navigate,
          },
        },
      }),
  });

  store.reducerManager = reducerManager;

  return store;
}

export type RootState = StateFromReducersMapObject<typeof staticReducers> &
  Partial<AsyncStateModules>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type ThunkConfig<E = unknown> = {
  state: RootState;
  dispatch?: AppDispatch;
  extra: {
    navigate: NavigateFunction;
  };
  rejectValue: E;
};
