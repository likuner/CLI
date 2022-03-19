#!/usr/bin/env node
const chalk = require('chalk')
const inquirer = require('inquirer')
const path = require('path')
const fse = require('fs-extra')
const { toKebabCase } = require('../utils/common')
const template = require('../template/index')

const types = ['component', 'page']
async function generate(cmdName, type, name) {
  if(!type) {
    const answers = await inquirer.prompt([
      {
        type:'list',
        name: 'type',
        choices: types,
        message:'请选择类型：'
      },
      {
        type:'input',
        name: 'name',
        message:'请输入文件名：',
        filter(val){
          return val && val.trim()
        }
      }
    ])
    type = answers.type
    name = answers.name
  } else if(!name) {
    const answers = await inquirer.prompt([
      {
        type:'input',
        name: 'name',
        message:'请输入文件名：',
        filter(val){
          return val && val.trim()
        }
      }
    ])
    name = answers.name
  }
  if(!types.includes(type)){
    console.log(chalk.red('类型须为component或page'))
    return
  }
  if(!name){
    console.log(chalk.red('无效的文件名'))
    return
  }
  const pathObj = path.parse(name)
  console.log(pathObj)
  const fileName = toKebabCase(name)
  const targetPath = path.resolve(process.cwd(), `src/${type}s`, pathObj.dir, `${fileName}.vue`)
  console.log(targetPath)
  if(await fse.pathExists(targetPath)){
    console.log(chalk.red('文件已存在'))
    return
  }
  try{
    await fse.outputFile(targetPath, template[type](fileName))
    console.log(chalk.green('生成文件成功'))
  } catch(e) {
    console.log(chalk.red('生成文件失败'))
  }
}

module.exports = generate