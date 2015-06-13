var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve('./src/index.js'),
  output: {
    filename: 'output.js',
  },
  plugins: [
    // Force any `require('react')` to yield local react
    new webpack.NormalModuleReplacementPlugin(
      /^react$/,
      require.resolve('react')
    ),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: [
          path.resolve('./src'),
          fs.realpathSync(path.resolve('./node_modules/foo/src'))
        ],
      },
    ],
  },
};
