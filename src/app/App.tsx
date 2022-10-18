import { useInitAuth } from 'app/lib/useInitAuth';
import { AppRouter } from 'app/providers/router';
import classNames from 'classnames';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'shared/lib/error-boundary';
import { Navbar } from 'widgets/navbar';
import { PageError } from 'widgets/page-error';
import { Sidebar } from 'widgets/sidebar';

export const App: React.FC = () => {
  const appClassNames = classNames('app');
  useInitAuth();

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
