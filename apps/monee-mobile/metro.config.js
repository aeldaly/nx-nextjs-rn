const { withNxMetro } = require('@nx/react-native');
const { getDefaultConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').InputConfigT}
 */
const defaultConfig = getDefaultConfig(__dirname);

module.exports = withNxMetro(
  {
    ...defaultConfig,

    resolver: {
      ...defaultConfig.resolver,
      assetExts: defaultConfig.resolver.assetExts.filter((ext) => ext !== 'svg'),
      sourceExts: [...defaultConfig.resolver.sourceExts, 'cjs', 'mjs', 'svg'],
    },

    transformer: {
      ...defaultConfig.transformer,
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },

    cacheVersion: 'monee-mobile',
  },
  {
    // Change this to true to see debugging info.
    // Useful if you have issues resolving modules
    debug: false,
    // All the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx', 'json'
    extensions: [],
    // Specify folders to watch, in addition to Nx defaults (workspace libraries and node_modules)
    watchFolders: [],
  }
);
