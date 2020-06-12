import fs from 'fs';
import path from 'path';
import { templates } from '../../constants/PATH';

const document = fs.readFileSync(path.resolve(templates, 'index.html')).toString();

const template = (app) => (
  document.replace('<!-- App -->', app)
);

export default template;
