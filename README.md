# 前后端分离-SPA应用 #

采用双服务器，冷热替换，实现项目与人员分治开发。

_目前为Demo阶段，框架还在不断完善中，开发脚本只通过了mac测试。
有问题欢迎联系我： 56833517@qq.com_

### 主要技术 ###

* NodeJS
* Redux
* react
* Ant Design
* react-router
* express

### 技术说明 ###

* 支持sass less precss
* 支持 es6 es7 babel
* react-redux
* thunkMiddleware promiseMiddleware createLogger
* 支持chrome插件 Redux DevTools
* page文件 要求固定命名  ```**.entry.js```
* 所有静态资源路径 assets-map.json（getStatic.js 前端获取路径方法）
* 源文件 src      build文件 dist
* bin 执行目录 留用。由于目前不使用node中间层，此后会继续扩展功能。

### 蒸汽时代 ###

采用gulp+webpack.
gulp运作task.
动态组建webpack的config文件

### 开发准备 ###

_初始化前，确保装了cnpm_
``` shell
# 进行cnpm install
sh init.sh
```

``` shell
# 开启gulp 开启webpack-dev-server 开发环境
npm run dev
```

### 如何打包 ###

``` shell
# 打包压缩
npm run start

# 启动node express 模拟生产环境
npm run server
```

### 如何启动项目 ###

_开发环境下：_
浏览器直接输入地址：http://127.0.0.1:9527/

_生产环境下：_
浏览器直接输入地址：http://127.0.0.1:3333/
