import { BuildOptions } from './types/config';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const buildWebServer = ({port}: BuildOptions): DevServerConfiguration => {
  return {
    port,
    open: true,
  }
}