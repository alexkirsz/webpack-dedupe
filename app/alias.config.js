var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve('./src/index.js'),
  output: {
    filename: 'output.js',
  },
  resolve: {
    alias: {
      react: require.resolve('react'),
    },
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'react-hot!babel',
        include: [
          path.resolve('./src'),
          fs.realpathSync(path.resolve('./node_modules/foo/src'))
        ],
      },
    ],
  },
};
