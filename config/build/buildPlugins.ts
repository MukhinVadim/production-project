import { BuildPaths, BuildOptions } from './types/config';
import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import path from 'path';

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
      new HTMLWebpackPlugin({
        template: paths.html,
      }),
      new webpack.ProgressPlugin(),
    ];
}