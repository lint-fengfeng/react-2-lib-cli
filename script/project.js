#!/usr/bin/env node 
const program = require('commander')
const version = require('../package.json').version

program
  .usage('<command> [options]')
  .version(version, "-v, --version")
  .command('init [name]', 'create project')
  .parse(process.argv)
