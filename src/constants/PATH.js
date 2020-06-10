const path = require('path');

export const root = path.resolve(__dirname, '..', '..');
export const _public = path.resolve(root, 'public');

const PATH = {
  root,
  public: _public,
};

export default PATH;
