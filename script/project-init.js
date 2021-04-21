#!/usr/bin/env node 
const path = require("path")
const program = require('commander')
const version = require('../package.json').version
const prompt = require("../process/prompt")
const getGitRepo = require('../process/get-git-repo')
const infile = require("../process/infile")
const runInstall = require("../process/install")
const { rootPath } = require("../utils/config")

program
  .version(version, "-v, --version")
  .option('--name [name]', 'project-name')
  .description('初始化项目文件')
  .action(async () => {
      const args = program.args; const name = program.name
      let projectName = args ? args[0] : name
      // 1. 询问过程 如果没有输入名称就 询问名称
      const params = await prompt(projectName)
      if (!projectName) {
        projectName = params.name
      } else {
        params.name = projectName
      }
      const projectPath = path.join(rootPath, `${projectName}`)
      const packagePath = path.join(projectPath, 'package.json')
      // 2. clone代码
      await getGitRepo(projectName)
      // 3. 修改package模板
      await infile(packagePath, params)
      // 4. 装依赖
      const result = await runInstall(projectPath)
    
  })
  .parse(process.argv)



  
