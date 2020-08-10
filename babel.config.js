// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = function babelConfig(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@components': './src/components',
          },
        },
      ],
    ],
  };
};
