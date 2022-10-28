import { TestAsyncThunk } from '@config/jest/testAsyncThunk';
import { DeepPartial } from '@reduxjs/toolkit';
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { signIn } from './signIn';

jest.mock('firebase/auth');

const mockedSignIn = jest.mocked(signInWithEmailAndPassword);

describe('signIn', () => {
  const responseData: DeepPartial<UserCredential> = {
    user: {
      providerData: [
        {
          displayName: 'vasya',
          email: 'user@gmail.com',
        },
      ],
    },
    providerId: 'id',
    operationType: 'signIn',
  };

  beforeEach(() => {
    mockedSignIn.mockReturnValue(
      Promise.resolve(responseData as UserCredential)
    );
  });

  test('should return response in payload', async () => {
    const testThunk = new TestAsyncThunk(signIn);

    const response = await testThunk.callThunk({
      email: 'user@gmail.com',
      password: '1234',
    });

    expect(mockedSignIn).toHaveBeenCalled();
    expect(response.meta.requestStatus).toBe('fulfilled');
    expect(response.payload).toEqual(responseData);
  });
});
