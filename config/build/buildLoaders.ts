import { BuildOptions } from './types/config';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
            [isDev && 'react-refresh/babel'].filter(Boolean),
          ].filter(arr => arr.length),
        },
      },
    ],
  }

  const svgrLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    resourceQuery: { not: [/url/] }, // exclude react component if *.svg?u
    use: ['@svgr/webpack'],
  };

  const imageLoader = {
    test: /\.(png|jpg|svg|jpeg|gif)$/i,
    type: 'asset/resource',
    resourceQuery: /url/, // *.svg?url
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoader = {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' :  MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",  
        options: {
          modules: {
            auto: /\.module\.\w+$/i,
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          }
        }
      },
      "sass-loader",
    ],
  }


  return [
    babelLoader,
    typescriptLoader,
    cssLoader,
    scssLoader,
    svgrLoader,
    imageLoader,
  ]
}