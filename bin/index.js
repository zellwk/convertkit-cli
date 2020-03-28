#!/usr/bin/env node
const chalk = require('chalk')
const cli = require('../src/index.js')
cli(process.argv.slice(2))
  .then(console.log)
  .catch(error => {
    console.log(chalk.red(error))
  })
