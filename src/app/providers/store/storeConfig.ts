/* eslint-disable no-use-before-define */
import {
  AnyAction,
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
  preloadedState?: PreloadedState<RootState>;
  reducers?: Partial<ReducersMapObject<RootState>>;
  navigate?: NavigateFunction;
}) {
  const reducerManager = createReducerManager<RootState>({
    ...staticReducers,
    ...reducers,
  });

  const store = configureStore<RootState, AnyAction>({
    reducer: reducerManager.reduce,
    preloadedState,
    // @ts-expect-error trouble with reducer manager
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
export type ThunkConfig<E> = {
  state?: RootState;
  dispatch?: AppDispatch;
  extra?: {
    navigate?: NavigateFunction;
  };
  rejectValue: E;
  serializedErrorType?: E;
};
