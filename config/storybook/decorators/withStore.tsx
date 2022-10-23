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
    // @ts-expect-error don't need full store for stories
    const store = setupStore(state, asyncReducers);

    return (
      <Provider store={store}>
        <StoryComponent />
      </Provider>
    );
  };
