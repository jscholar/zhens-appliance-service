const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PUBLIC = path.resolve(__dirname, '..', 'public');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '..', 'src', 'client', 'index.bundle.jsx'),
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'src', 'templates', 'index.html'),
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
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [
          /node_modules/,
        ],
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
