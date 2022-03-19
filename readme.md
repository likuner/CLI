## 简介


`@likun./cli`是快速搭建`vue`项目的脚手架，可以实现vue项目的初始化、页面（组件）新建、打包等功能。`@likun./cli`脚手架是基于`vue-cli`实现的，集成了包括`vuex`、`vue-router`、`axios`在内的`vue`常用插件，以及`mockjs`、`monent`等前端常用插件。


## 安装


> **Node 版本要求**
Vue CLI 需要 Node.js 8.9 或更高版本。



全局安装


```javascript
npm i @likun./cli -g
```


安装之后，你就可以在命令行中访问`kl`命令。你还可以用这个命令来检查其版本是否正确：


```javascript
kl --version
//或者
kl -V
```


## 基础


运行`kl help`可以查看当前支持的指令。
​

## 指令


#### `init`


初始化项目


#### `build`


项目打包，输出zip文件。使用`-p`或`--prod`会产出`release`包


#### `serve`


本地运行项目，效果同`vue-cli-service serve`,`--open`会在编译完成后自动打开浏览器


#### `generate、g`


生成模版文件，当前支持页面及组件文件
​

#### `lint`


代码检查
