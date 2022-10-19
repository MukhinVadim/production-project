import { DecoratorFn } from '@storybook/react';
import React from 'react';
import { StoreProvider } from '../../../src/app/providers/store';

export const withStore: DecoratorFn = (StoryFn) => {
  return (
    <StoreProvider>
      <StoryFn />
    </StoreProvider>
  );
};
