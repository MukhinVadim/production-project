import { ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { signInReducer } from 'features/auth-by-email';
import { DeepPartial } from 'react-hook-form';
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
      preloadedState: state as RootState,
      reducers: asyncReducers as Partial<ReducersMapObject<RootState>>,
    });

    return (
      <Provider store={store}>
        <StoryComponent />
      </Provider>
    );
  };
