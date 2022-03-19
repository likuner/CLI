const { isRootFolder } = require('../utils/common')
const spawn = require('cross-spawn')
const chalk = require('chalk')

const BUILD_CMD = 'npx vue-cli-service build --mode staging'
const BUILD_CMD_PROD = 'npx vue-cli-service build --mode production'

async function build(prod) {
  if(!await isRootFolder()) {
    console.log(chalk.red('请在项目根目录下执行此命令'))
    return
  }
  spawn.sync(prod ? BUILD_CMD_PROD : BUILD_CMD, { 
    stdio: 'inherit',
    shell: true
  })
}

module.exports = build