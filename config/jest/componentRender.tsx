import React, { ReactNode } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from 'app/providers/store';
import { PreloadedState } from '@reduxjs/toolkit';
import { AppStore, RootState } from 'app/providers/store/storeConfig';
import i18nForTests from './i18nForTests';
// import 'firebase';

interface ComponentRenderOptions {
  route?: string;
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export const componentRender = (
  component: ReactNode,
  preloadedState = {},
  store = setupStore(preloadedState as PreloadedState<RootState>),
  options: ComponentRenderOptions = {}
) => {
  const { route = '/' } = options;

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </MemoryRouter>
    </Provider>
  );
};
