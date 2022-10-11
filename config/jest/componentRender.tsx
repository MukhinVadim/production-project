import React, { ReactNode } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from './i18nForTests';

interface ComponentRenderOptions {
  route?: string;
}

export const componentRender = (
  component: ReactNode,
  options: ComponentRenderOptions = {}
) => {
  const { route = '/' } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
    </MemoryRouter>
  );
};
