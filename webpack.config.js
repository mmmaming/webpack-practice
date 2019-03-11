const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const HappyPack = require('happypack');
const packagejson = require("./package.json");
module.exports = {
  // JavaScript 执行入口文件
  entry: {
    first: './src/first.js',
    vendor: ['jquery']
  },
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: '[name]_.js',
    // 把输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor', 'runtime'],
        filename: '[name].js',
        // minChunks: 2
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common',
    //   filename: '[name].js',
    //   chunks:['first']
    // })
   ]
};