const inquirer = require("inquirer")

async function prompt (projectName) {
  const temp = [{
    name:"description",
    message:"请输入描述"
  }, {
    name:"author",
    message:"请输入作者"
  }]

  if (!projectName) {
    temp.unshift({
      name: 'name',
      message:"请输入package名称 "
    })
  }
  return inquirer.prompt(temp)
}

module.exports = prompt