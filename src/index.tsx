import { ThemeProvider } from './shared/lib/theme-provider';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from "./app/App";
import './i18n'

render(
<BrowserRouter>
            <ThemeProvider>
              <App/>
            </ThemeProvider>
        </BrowserRouter>,
  document.getElementById('root')
)