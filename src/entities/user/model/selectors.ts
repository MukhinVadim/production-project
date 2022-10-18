import { createSelector } from '@reduxjs/toolkit';
import { rootSelector } from 'shared/lib/selectors/rootSelector';

export const userAuthDataSelector = createSelector(
  rootSelector,
  (state) => state.user.user
);
