import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/user';

const rootReducer = combineReducers({
  user: userReducer,
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
