#!/usr/bin/env node
const inquirer = require('inquirer')
const chalk = require('chalk')
const path = require('path')
const fse = require('fs-extra')
const compressing = require('compressing')

async function init() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      choices: ['web', 'mobile'],
      message: '请选择初始化项目类型：'
    },
    {
      type:'input',
      name: 'name',
      message: '请输入项目名称：',
      filter(val){
        return val && val.trim()
      }
    }
  ])
  const {type, name} = answers
  if(!name) {
    console.log(chalk.red('项目名称不能为空'))
    return
  }
  const targetPath = path.resolve(process.cwd(), name)
  if(await fse.pathExists(targetPath)){
    console.log(chalk.red('当前目录下已存在同名项目'))
    return
  }
  try{
    await fse.ensureDir(targetPath) //创建工程文件夹
    const templatePath = path.resolve(__dirname, `../template/assets/${type}.zip`) //模版zip包
    await compressing.zip.uncompress(templatePath, targetPath) // 将模版项目zip包解压到目标目录下
    // 重写package.json中的name属性
    const packagePath = path.resolve(targetPath, 'package.json')
    const packageInfo = await fse.readJSON(packagePath)
    packageInfo.name = name
    await fse.outputJson(packagePath, packageInfo)
    console.log(chalk.green('项目初始化成功'))
    guideLog(name)
  } catch(e){
    console.log(chalk.red('初始化项目失败', e))
  }
}

function guideLog(name) {
  console.log(`
    ${chalk.bgWhite.black('   Run Application:  ')}
    ${chalk.yellow(`1. cd ${name}`)}
    ${chalk.yellow(`2. npm install`)}
    ${chalk.yellow('3. kl serve --open')}
  `)
}

module.exports = init