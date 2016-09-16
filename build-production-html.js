const fs = require('fs');
const path = require('path');
const htmlTemplate = require('./html-template');
const { repoName, title } = require('./slide-info');

const dist = path.join(__dirname, 'dist');

fs.writeFileSync(
  path.join(dist, 'index.html'),
  htmlTemplate({ title, repoName })
);
