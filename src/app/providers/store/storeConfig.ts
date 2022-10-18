import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/user';
import { signInReducer } from 'features/auth-by-email';

const rootReducer = combineReducers({
  user: userReducer,
  signIn: signInReducer,
});

// eslint-disable-next-line no-use-before-define
export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
