const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webPackNodeExtarnals = require('webpack-node-externals')

const config = {
  target: 'node',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [webPackNodeExtarnals()]
}

module.exports =  merge(baseConfig, config);