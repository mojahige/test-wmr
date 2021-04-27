module.exports = function (api) {
  api.cache(true);

  const presets = [
    '@babel/preset-env',
    ['@babel/preset-typescript', { jsxPragma: 'h' }],
  ];
  const plugins = [
    [
      '@babel/transform-react-jsx',
      { runtime: 'automatic', importSource: 'preact' },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
