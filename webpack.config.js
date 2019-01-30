const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // JavaScript 执行入口文件
  entry: {
    app: './main.js'
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'commonjs2'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        // 用正则去匹配要用该 loader 转换的 CSS 文件
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader']
        }),
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: path.resolve(__dirname, 'node_modules')
      }
    ]
  },
  plugins: [
    
    new ExtractTextPlugin({
      // 从 .js 文件中提取出来的 .css 文件的名称
      filename: `[name]-index.css`,
    })
  ],
  externals: /^(react|babel-runtime)/
};