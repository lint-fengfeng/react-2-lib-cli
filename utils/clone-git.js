const shell = require("shelljs")
const path = require("path")

async function cloneGitRepo({ repositoryURL, projectPath, projectName, success, fail}) {
  try {
    const fullPath = path.join(`${projectPath}`, `${projectName}`)
    console.log(fullPath)
    await shell.rm('-rf', fullPath)
    await shell.exec(`git clone ${repositoryURL} ${projectName}`)
    success && success()
  } catch (err) {
    fail && fail(err)
  }
}

module.exports = cloneGitRepo