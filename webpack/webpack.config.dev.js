const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.config.common');

const PUBLIC = path.resolve(__dirname, '..', 'public');

module.exports = merge(common, {
  mode: 'development',
  entry: path.resolve(__dirname, '..', 'src', 'client', 'index.bundle.jsx'),
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src', 'templates', 'index.dev.html'),
    }),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(PUBLIC, 'scripts'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(PUBLIC),
    port: 9000,
    historyApiFallback: true,
  },
});
