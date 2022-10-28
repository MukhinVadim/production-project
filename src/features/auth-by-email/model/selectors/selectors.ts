import { createSelector } from '@reduxjs/toolkit';
import { rootSelector } from 'shared/lib/selectors/rootSelector';

export const signInSelector = createSelector(
  rootSelector,
  (state) => state.signIn
);
