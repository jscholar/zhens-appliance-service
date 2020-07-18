import fs from 'fs';
import path from 'path';
import { templates } from '../../PATH';

const document = fs.readFileSync(path.resolve(templates, 'index.html')).toString();

const template = (app, css) => {
  document.replace('<!-- App -->', app);
  document.replace('/* CSS */', [...css].join(''));
  return document;
};

export default template;
