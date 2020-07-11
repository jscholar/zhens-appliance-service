/* eslint-disable global-require */

const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

const ROOT = path.resolve(__dirname, '..');
const PUBLIC = path.resolve(ROOT, 'public');

module.exports = [
  merge(common, {
    name: 'client',
    mode: 'production',
    entry: path.resolve(__dirname, '..', 'src', 'client', 'index.client.jsx'),
    output: {
      filename: 'client.js',
      path: path.resolve(PUBLIC, 'scripts'),
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  }),
  merge.smart(common, { // Smart will check and override rules
    name: 'server',
    mode: 'production',
    target: 'node',
    context: path.resolve(ROOT, 'src', 'index.js'),
    entry: path.resolve(ROOT, 'src', 'index.js'),
    node: {
      __dirname: false,
    },
    output: {
      path: path.join(__dirname, '..', 'dist'),
      filename: 'index.js',
      libraryTarget: 'commonjs2',
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            'isomorphic-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
                sassOptions: {
                  fiber: false,
                },
              },
            },
          ],
        },
      ],
    },
  }),
];
