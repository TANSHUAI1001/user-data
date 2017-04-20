# react redux webpack 项目

## 开始
如果项目没有安装node_modules依赖，使用
```npm install```

然后在开发中使用到依赖时，根据需要写入到package.json之中，如
```npm install --save react``
```npm install --save-dev autoprefixer```
各自写入到依赖和开发依赖之中。

脚本命令：```npm start```是开发调试模式，```npm run build```是生产模式，将生成build目录
```
"start": "webpack-dev-server --env development",
"build": "webpack --env production",
```

## 配置说明

```my_index.ejs```是html模板，在html-webpack-plugin插件用到
在webpack中的配置是：

```
exports.page = ({
  path = '',
  template = require.resolve(
    './my_index.ejs'
  ),
  title,
  entry,
  chunks,
} = {}) => ({
  entry,
  plugins: [
    new HtmlWebpackPlugin({
      chunks,
      filename: `${path && path + '/'}index.html`,
      template,
      title,
    }),
  ],
});
```

在webpack.config.js中，```commonConfig```是公共配置，```productionConfig```是生产配置，```developmentConfig```是开发配置。
