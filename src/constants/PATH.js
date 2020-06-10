const path = require('path');

export const root = path.resolve(__dirname, '..', '..');
export const publicPath = path.resolve(root, 'public');
export const templates = path.resolve(root, 'src', 'templates');

const PATH = {
  root,
  public: publicPath,
  templates,
};

export default PATH;
