module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': './src', // 👈 maps "@" to your "src" folder
            '@components': './src/components',
            '@screens': './src/screens',
            '@assets': './assets',
          },
        },
      ],
    ],
  };
};
