'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './app/index.js',
    output: {
      path: path.resolve(__dirname, 'www/dist'),
      filename: 'bundle.js'
    },
    module:{
        rules:[
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.js$/, use: 'babel-loader' },
        ]
    },
    resolve: {
        extensions: [ '.js', '.css', '.html'],
        modules: [path.resolve(__dirname, 'app'), path.resolve(__dirname, 'node_modules')]
          
    },
    resolveLoader: {
        modules: ['node_modules'],
        extensions: ['.js', '.json']
    },
  };
  