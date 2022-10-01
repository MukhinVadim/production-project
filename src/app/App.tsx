import { AppRouter } from 'app/providers/router';
import classNames from 'classnames';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'shared/lib/error-boundary';
import { useTheme } from 'shared/lib/theme-provider';
import { Navbar } from 'widgets/Navbar';
import { PageError } from 'widgets/PageError';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';

export const App: React.FC = () => {
  const { theme } = useTheme();
  const appClassNames = classNames('app', theme);

  return (
    <div className={appClassNames}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <ErrorBoundary
            fallback={<PageError />}
          >
            <AppRouter />
          </ErrorBoundary>
        </div>
      </Suspense>
    </div>
  );
};
