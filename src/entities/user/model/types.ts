export interface User {
  id: number;
  username: string;
}

export interface UserState {
  authData?: User;
}