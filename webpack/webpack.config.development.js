const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin')

const baseConfig = require('./webpack.config.common.js')

const config = {
  mode: 'development',
  devtool: 'source-map',
  entry: [path.resolve(__dirname, '../docs/index.js')],
  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: [path.resolve(__dirname, '../public')],
    watchContentBase: true,
    liveReload: false,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./public/index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackShellPlugin({
      onBuildStart: ['echo "Webpack Start"'],
      onBuildEnd: ['yalc push']
    })
  ]
}

module.exports = merge(baseConfig, config)
