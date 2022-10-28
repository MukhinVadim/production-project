import { DeepPartial } from '@reduxjs/toolkit';
import { RootState } from 'app/providers/store';
import { signInSelector } from './selectors';

describe('signInSelector', () => {
  test('should return signIn', () => {
    const state: DeepPartial<RootState> = {
      signIn: {
        error: {},
        isLoading: false,
      },
    };

    expect(signInSelector(state as RootState)).toEqual(state.signIn);
  });
});
