const { description, repository: repo } = require('./package.json');

const user = repo.url.split('/')[3];
const repoName = repo.url.split('/').pop().replace('\.git', '');

module.exports = {
  user,
  repoName,
  title: description
};
