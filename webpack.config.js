const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  exclude: path.join(__dirname, 'node_modules'),
};

const commonConfig = merge([
  {
    output: {
      path: PATHS.build,
      filename: '[name].js',
    },
  },
   parts.loadJavaScript({}),
]);

const productionConfig = merge([
  {
    performance: {
      hints: 'warning', // 'error' or false are valid too
      maxEntrypointSize: 100000, // in bytes
      maxAssetSize: 450000, // in bytes
    },
    output: {
      chunkFilename: '[name].chunk.js',
      filename: '[name].js',
    },
    plugins: [
      new webpack.HashedModuleIdsPlugin(),
    ],
    // recordsPath: 'records.json',
  },
  parts.clean(PATHS.build),
  parts.minifyJavaScript(),
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true,
        // Run cssnano in safe mode to avoid
        // potentially unsafe transformations.
        safe: true,
      },
    },
  }),
//   parts.attachRevision(),
  parts.extractBundles([
    {
      name: 'vendor',
      minChunks: ({ resource }) => (
        resource &&
        resource.indexOf('node_modules') >= 0 &&
        resource.match(/\.(js|jsx)$/)
      ),
    },
    // {
    //   name: 'manifest',
    //   minChunks: Infinity,
    // },
  ]),
  // parts.generateSourceMaps({ type: 'source-map' }),
  parts.generateSourceMaps({ type: 'false' }),
  parts.extractCSS({
    use: ['css-loader', parts.autoprefix()],
  }),
  parts.loadImages({
    options: {
      limit: 15000,
      name: '[name].[ext]',
    },
  }),
  parts.setFreeVariable(
    'process.env.NODE_ENV',
    'production'
  ),
]);

const developmentConfig = merge([
  {
    output: {
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
    },
  },
  // parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' }),
  parts.generateSourceMaps({ type: 'eval-source-map' }),
    // parts.generateSourceMaps({ type: 'source-map' }),
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    // port: process.env.PORT,
    port:3000,
  }),
  // parts.loadCSS(),
   parts.extractCSS({
    use: ['css-loader', parts.autoprefix()],
  }),
  parts.loadImages(),
]);

module.exports = (env) => {
  const pages = [
    parts.page({
      title: '门户首页',
      inject: true,
      entry: {
        "main/index": path.join(PATHS.app, "index.js"),
      },
      chunks: ['main/index', 'vendor'],
    }),
    parts.page({
      title: '商城首页',
      inject: true,
      path: 'mall',
      entry: {
        "mall/mall": path.join(PATHS.app, 'mall.js'),
      },
      chunks: ['mall/mall', 'vendor']
    }),
  ];
  const config = env === 'production' ?
    productionConfig :
    developmentConfig;

  return merge([commonConfig, config].concat(pages));
};
