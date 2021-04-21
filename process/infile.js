const handlebars = require("handlebars")
const fs = require("fs")

async function infile (packagePath, params) {
  const content = await fs.readFileSync(packagePath).toString()
  const template = handlebars.compile(content)
  const result = template(params)
  await fs.writeFileSync(packagePath,result)
}

module.exports = infile