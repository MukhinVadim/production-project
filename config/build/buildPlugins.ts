import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import dotenv from 'dotenv';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev, analyze }: BuildOptions) {
  // call dotenv and it will return an Object with a parsed key
  const env = dotenv.config().parsed;

  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env ?? {}).reduce(
    (prev: Record<string, string>, next) => {
      prev[`process.env.${next}`] = JSON.stringify(env?.[next]);
      return prev;
    },
    {}
  );

  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public',
          to: '.',
          globOptions: {
            ignore: ['**/index.html'],
          },
        },
      ],
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      ...envKeys,
    }),
    new webpack.HotModuleReplacementPlugin(),
    analyze && new BundleAnalyzerPlugin(),
    isDev && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean) as webpack.WebpackPluginInstance[];
}
