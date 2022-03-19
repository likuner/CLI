const spawn = require('cross-spawn')

const LINT_CMD = 'npx vue-cli-service lint'

async function lint() {
    spawn.sync(LINT_CMD, { 
      stdio: 'inherit',
      shell: true
    })
}
module.exports = lint;