module.exports = function (api) {
  api.cache(true);

  if (
    process.env.NX_TASK_TARGET_TARGET === 'build' ||
    process.env.NX_TASK_TARGET_TARGET?.includes('storybook')
  ) {
    return {
      presets: [
        [
          '@nx/react/babel',
          {
            runtime: 'automatic',
          },
        ],
      ],
      plugins: [
        [
          'module-resolver',
          {
            alias: {
              '@monee/shared': '../../libs/shared/src',
            },
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
          },
        ],
      ],
    };
  }

  return {
    presets: [
      ['module:@react-native/babel-preset', { useTransformReactJSX: true }],
    ],
    plugins: [
      // 'nativewind/babel',
      [
        'module-resolver',
        {
          alias: {
            '@monee/shared': '../../libs/shared/src',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        },
      ],
    ],
  };
};
