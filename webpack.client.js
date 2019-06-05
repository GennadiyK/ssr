const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webPackNodeExtarnals = require('webpack-node-externals')

const config = {
  entry: './src/client/client.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  externals: [webPackNodeExtarnals()]
}


module.exports =  merge(baseConfig, config);