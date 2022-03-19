#!/usr/bin/env node
const { program } = require('commander')
const chalk = require('chalk')
const packagejson = require('../package.json')
const execute = require('../commands/index')

program.version(packagejson.version)

program.command('init')
  .description('初始化项目')
  .action(args => {
    execute('init', program.args)
  })

program.command('generate')
  .description('生成模版组件')
  .action(args => {
    execute('generate', program.args)
  })
program.command('g')
  .description('生成模版组件')
  .action(args => {
    execute('g', program.args)
  })

program.command('serve')
  .description('本地运行项目 ')
  .option('-o, --open', 'open')
  .action(args => {
    execute('serve', args.open)
  })

program.command('build')
  .description('项目打包')
  .option('-p, --prod, --production', 'prod')
  .action(args => {
    execute('build', args.prod)
  })

program.command('lint')
  .description('代码检查')
  .action(args => {
    execute('lint')
  })

program.parse(process.argv)