import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { signInReducer } from 'features/auth-by-email';
import { Provider } from 'react-redux';
import {
  AsyncStateModules,
  RootState,
  setupStore,
} from '../../../src/app/providers/store/storeConfig';

const asyncReducers: ReducersMapObject<AsyncStateModules> = {
  signIn: signInReducer,
};

export const withStore =
  (state: DeepPartial<RootState>) => (StoryComponent: Story) => {
    const store = setupStore({
      // @ts-expect-error don't need full store for stories
      preloadedState: state,
      reducers: asyncReducers,
    });

    return (
      <Provider store={store}>
        <StoryComponent />
      </Provider>
    );
  };
