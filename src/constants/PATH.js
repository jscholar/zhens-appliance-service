const path = require('path');

export const root = path.resolve(__dirname, '..', '..');
export const _public = path.resolve(root, 'public');
export const templates = path.resolve(root, 'src', 'templates');

const PATH = {
  root,
  public: _public,
  templates,
};

export default PATH;
