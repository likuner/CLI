#!/usr/bin/env node
const init = require('./init')
const generate = require('./generate')
const serve = require('./serve')
const build = require('./build')
const lint = require('./lint')

module.exports = async function execute(name, args) {
  switch(name){
    case 'init':
      init()
      break
    case 'generate':
    case 'g':
      generate(...args)
      break
    case 'serve':
      serve(args)
      break
    case 'build':
      build(args)
      break
    case 'lint':
      lint()
      break
  }
}