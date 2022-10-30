import { signInReducer } from 'features/auth-by-email/model/slices/signInSlice';
import { AuthError, UserCredential } from 'firebase/auth';
import { signIn } from '../api/signIn';

describe('signInSlice', () => {
  test('should set state while pending', () => {
    expect(
      signInReducer({}, signIn.pending('', { email: '', password: '' }))
    ).toEqual({
      isLoading: true,
    });
  });

  test('should set state if fulfilled', () => {
    expect(
      signInReducer(
        {},
        signIn.fulfilled({} as UserCredential, '', {
          email: '',
          password: '',
        })
      )
    ).toEqual({
      isLoading: false,
    });
  });

  test('should set state if rejected', () => {
    expect(
      signInReducer(
        {},
        signIn.rejected(
          {
            name: '',
            message: '',
          },
          '',
          {
            email: '',
            password: '',
          },
          {
            name: 'error',
          } as AuthError
        )
      )
    ).toEqual({
      isLoading: false,
      error: { name: 'error' },
    });
  });
});
