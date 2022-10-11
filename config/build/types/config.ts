import webpack from 'webpack';

export type BuildMode = webpack.Configuration['mode'];

enum PathsEnum {
  'entry',
  'build',
  'html',
  'src',
}

export type BuildPaths = Record<keyof typeof PathsEnum, string>;

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  analyze: boolean;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  analyze: boolean;
}
