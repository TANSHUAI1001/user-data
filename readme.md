# react redux webpack 项目

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
脚本命令：```npm start```是开发调试模式，```npm run build```是生产模式，将生成build目录
```
"start": "webpack-dev-server --env development",
"build": "webpack --env production",
```