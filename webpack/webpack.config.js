const path = require('path');

const PUBLIC = path.resolve(__dirname, '..', 'public');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '..', 'dist', 'client', 'index.client.js'),
  output: {
    filename: 'client.js',
    path: path.resolve(PUBLIC, 'scripts'),
  },
};
