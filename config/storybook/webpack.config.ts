import path from 'path';
import webpack, { Configuration, RuleSetRule } from 'webpack';

export default ({ config }: { config: Configuration }) => {
  const paths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');

  if (config.module) {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    });
  }

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  config.plugins?.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
    })
  );

  return config;
};
