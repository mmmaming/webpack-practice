/**
 * Created on 2018/3/5.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    // main: './src/index.js',
    // vendor: [
    //     'lodash'
    // ]
    polyfills: './src/polyfills.js',
    index: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendor'
        },
        manifest: {
          name: 'js/manifest'
        }
      }
    }
  },
  plugins: [
    // new UglifyJSPlugin({
    //   sourceMap: true
    // }),
    new webpack.HashedModuleIdsPlugin(),

    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Progressive Web Application'
    }),
    new webpack.ProvidePlugin({
      // _: 'lodash'
      join: ['lodash', 'join']
    }),
      new WorkboxPlugin({
        clientsClaim: true,
        skipWaiting: true
      })
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use : ['style-loader', 'css-loader']
      }
      // },
      // {
      //   test: require.resolve('./src/index.js'),
      //   use : 'imports-loader?this=>window'
      // }
      // },
      // {
      //   test: require.resolve('./src/global.js'),
      //   use: 'exports-loader?file,parse=helpers.parse'
      // }
    ]
  },
  output: {
    filename: '[name].bundle.js',
    // chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname,'dist')
  }
};