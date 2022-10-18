import { AuthError } from 'firebase/auth';

export interface SignInState {
  isLoading?: boolean;
  error?: AuthError;
}

export interface Inputs {
  email: string;
  password: string;
}
