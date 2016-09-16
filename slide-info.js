const { description, repository: repo } = require('./package.json');

const repoName = repo.url.split('/')
  .pop()
  .replace('\.git', '');

module.exports.repoName = repoName;
module.exports.title = description;
