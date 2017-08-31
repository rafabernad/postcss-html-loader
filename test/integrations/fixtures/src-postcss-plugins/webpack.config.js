'use strict';

const {join} = require('path');

module.exports = {
  resolveLoader: {
    alias: {
      'postcss-html-loader': join(__dirname, './../../../../src/index.js'),
    }
  },
  module: {
    rules: [{
      test: /\.html$/,
      loaders: ['text-loader', 'postcss-html-loader']
    }]
  }
}