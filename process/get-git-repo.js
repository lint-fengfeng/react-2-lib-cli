
const ora = require('ora')
const cloneGit = require('../utils/clone-git')
const promisify = require("../utils/promisify")
const { repositoryURL, rootPath } = require("../utils/config")

function getGitRepo(projectName) {
  const download = promisify(cloneGit)
  const spinner = ora('正在从gitlab下载template...\n')
  spinner.start()
  // 仓库地址  项目path  项目名
  const { repositoryURL, rootPath } = require("../utils/config")
  return download({repositoryURL, rootPath, projectName})
  .then(() => {
    spinner.color = 'green';
    spinner.succeed('下载成功');
    return
  })
  .catch(err => {
    if (err) {
      // 可以输出一些项目失败的信息
      console.error(111, err)
      spinner.color = 'red';
      spinner.fail(err);
      return err
    }
  })
}

module.exports = getGitRepo

