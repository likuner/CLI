const fse = require('fs-extra')
const path = require('path')

// 驼峰转连字符拼接格式
function toKebabCase(name) {
  const newName = name.replace(/([A-Z])/g, '-$1').toLowerCase()
  return newName.startsWith('-') ? newName.slice(1) : newName
}

// 判断是否位于根目录
function isRootFolder() {
  return fse.pathExists(path.resolve(process.cwd(), 'package.json'))
}

module.exports = {
  toKebabCase,
  isRootFolder
}