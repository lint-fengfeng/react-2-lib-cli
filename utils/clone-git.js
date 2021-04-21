const shell = require("shelljs")
const path = require("path")

async function cloneGitRepo({ repositoryURL, rootPath, projectName, success, fail}) {
  try {
    const fullPath = path.join(`${rootPath}`, `${projectName}`)
    await shell.rm('-rf', fullPath)
    await shell.exec(`git clone ${repositoryURL} ${projectName}`)
    success && success()
  } catch (err) {
    fail && fail(err)
  }
}

module.exports = cloneGitRepo