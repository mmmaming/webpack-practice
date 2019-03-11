const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');

const app = express();
const compiler = webpack(config);

app.use(webpackMiddleware(compiler, {
  publicPath: '/',
  noInfo: false,
  quiet: false,
  stats: {
    colors: true
  }
}));


app.listen(3001);