const path = require('path');

module.exports = {
  dependencies: {
    'react-native-gesture-handler': {
      root: path.resolve(__dirname, '../../'),
      platforms: {
        ios: {
          podspecPath: path.resolve(
            __dirname,
            '../../node_modules/react-native-gesture-handler/RNGestureHandler.podspec'
          ),
        },
      },
    },
  },
};
