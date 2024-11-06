const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // Add any necessary loaders for your project
    ],
  },
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve('path-browserify'),
      util: require.resolve('util/'),
      os: require.resolve('os-browserify/browser'),
      stream: require.resolve('stream-browserify'), // Add this line for the stream module
    },
  },
};
