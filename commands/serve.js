const { isRootFolder } = require('../utils/common')
const spawn = require('cross-spawn')
const chalk = require('chalk')

const SERVE_CMD = 'npx vue-cli-service serve';
const SERVE_OPEN_CMD = 'npx vue-cli-service serve --open';

async function serve(open){
  const isRoot = await isRootFolder()
  if(!isRoot) {
    console.log(chalk.red('请在项目根目录下执行此命令'))
    return
  }
  const ret = spawn.sync(open ? SERVE_OPEN_CMD : SERVE_CMD, { 
    stdio: 'inherit',
    shell: true
  })
  console.log('ret', ret)
}

module.exports = serve