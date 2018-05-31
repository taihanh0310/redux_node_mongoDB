var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  watch: true,

  module: {
    rules: [{
      test: /\.js$/, // include .js files
      exclude: /node_modules/, // exclude any and all files in the node_modules folder,
      loaders: 'babel-loader',
      query: {
      	presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./src'),
      'node_modules'
    ],
    alias: {
      Config$: path.resolve(__dirname, 'src/common/config/index.js')
    }
  }
};