import fs from 'fs';
import path from 'path';
import PATH from '../../constants/PATH';

const document = fs.readFileSync(path.resolve(PATH.templates, 'index.html')).toString();

const template = (app) => {
  return document.replace('<!-- App -->', app);
}

export default template;
