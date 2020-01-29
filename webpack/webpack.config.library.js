const merge = require('webpack-merge')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const webpack = require('webpack')

const baseConfig = require('./webpack.config.common.js')

const production = {
  mode: 'production',
  entry: {
    framework: [path.resolve(__dirname, '../src/framework/widgets/export.js')]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].dll.js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: './dist/[name].json'
    })
  ],
  externals: [nodeExternals()]
}

module.exports = merge(baseConfig, production)
