import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const root = path.resolve(__dirname, '..');
export const _public = path.resolve(root, 'public');

const PATH = {
  root,
  public: _public,
};

export default PATH;
