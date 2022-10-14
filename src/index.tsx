import { StoreProvider } from 'app/providers/store';
import 'app/styles/index.scss';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'shared/lib/theme-provider';
import { App } from './app/App';
import './i18n';

render(
  <StoreProvider>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);
