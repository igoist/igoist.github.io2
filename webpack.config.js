const path = require('path');
const webpack = require('webpack');

const srcPath = './src/';

const entries = {
  home: [
    'webpack-hot-middleware/client',
    srcPath + 'index.js'
  ],
  faq: [
    'webpack-hot-middleware/client',
    srcPath + 'views/faq/index.js'
  ]
}

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: entries,

  output: {
    filename: '[name].bundle.min.js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/static/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader', 'eslint-loader'],
        include: path.join(__dirname, srcPath)
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.join(__dirname, srcPath)
      }, {
        test: /\.(png|jpg)$/,
        loaders: ['url-loader'],
        include: path.join(__dirname, srcPath)
      }
    ]
  },

  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    new webpack.HotModuleReplacementPlugin()
  ]
};