const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cssnano = require('cssnano');
const BabiliPlugin = require('babili-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const spath = require('path');

exports.devServer = ({host, port} = {}) => ({
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    overlay: {
      errors: true,
      warnings: true,
    },
  },
});

exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        include,
        exclude,

        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  
});

exports.extractCSS = ({ include, exclude, use }) => {
  // Output extracted CSS to a file
  const plugin = new ExtractTextPlugin({
    filename: '[name].css',
  });

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,

          use: plugin.extract({
            use,
            fallback: 'style-loader',
          }),
        },
      ],
    },
    plugins: [ plugin ],
  };
};

exports.autoprefix = () => ({
  loader: 'postcss-loader',
  options: {
    plugins: () => ([
      require('autoprefixer'),
    ]),
  },
});

exports.generateSourceMaps = ({ type }) => ({
  devtool: type,
});

exports.extractBundles = (bundles) => ({
  plugins: bundles.map((bundle) => (
    new webpack.optimize.CommonsChunkPlugin(bundle)
  )),
});

exports.loadJavaScript = ({ include, exclude }) => ({
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include,
        exclude,

        loader: 'babel-loader',
       
        options: {
          // Enable caching for improved performance during
          // development.
          // It uses default OS directory by default. If you need
          // something more custom, pass a path to it.
          // I.e., { cacheDirectory: '<path>' }

          cacheDirectory: true,
        },
      },
    ],
  },
  resolve:{
      // extensions:['*','.js','.jsx'],
      alias:{
        components:__dirname+'/app/components/',
        bases:__dirname+'/app/components/bases/',
        containers:__dirname+'/app/containers/',
        actions:__dirname+'/app/actions/',
        reducers:__dirname+'/app/reducers/',
        css:__dirname+'/app/css/',
        images:__dirname+'/app/images/',
      }
    },
});

exports.clean = (path) => ({
  plugins: [
    new CleanWebpackPlugin([path]),
  ],
});

exports.minifyJavaScript = () => ({
  plugins: [
    new BabiliPlugin(),
  ],
});

exports.minifyCSS = ({ options }) => ({
  plugins: [
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: options,
      canPrint: false,
    }),
  ],
});

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

exports.setFreeVariable = (key, value) => {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [
      new webpack.DefinePlugin(env),
    ],
  };
};

exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|jpeg|gif)$/,
        include,
        exclude,

        use: {
          loader: 'url-loader',
          options:{
            limit:10000,
            name:'images/[name].[ext]'
          },
        },
      },
    ],
  },
});
