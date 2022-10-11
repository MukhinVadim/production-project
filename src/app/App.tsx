import { AppRouter } from 'app/providers/router';
import classNames from 'classnames';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'shared/lib/error-boundary';
import { Navbar } from 'widgets/Navbar';
import { PageError } from 'widgets/PageError';
import { Sidebar } from 'widgets/Sidebar';

export const App: React.FC = () => {
  const appClassNames = classNames('app');

  return (
    <div className={appClassNames}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <ErrorBoundary fallback={<PageError />}>
            <AppRouter />
          </ErrorBoundary>
        </div>
      </Suspense>
    </div>
  );
};
