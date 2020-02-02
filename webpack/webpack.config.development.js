const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin')
const npm = require("npm");

const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const baseConfig = require('./webpack.config.common.js')

const config = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: {
    main: path.resolve(__dirname, '../docs/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  devServer: {
    contentBase: [path.resolve(__dirname, '../dist')],
    watchContentBase: true,
    hotOnly: true,
    compress: true,
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

const config2 = {
  mode: 'production',
  entry: {
    framework: path.resolve(__dirname, '../src/framework/widgets/export.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'), 
    filename: '[name].js',
    library: '@sample/framework',
    libraryTarget: 'commonjs2'
  },
  devServer: {
    writeToDisk: true,
    contentBase: [path.resolve(__dirname, '../dist')],
    hotOnly: true,
    compress: true,
  },
  plugins: [
    new CleanWebpackPlugin(), 
    new webpack.HotModuleReplacementPlugin(),
    new WebpackShellPlugin({
      dev: false,
      onBuildStart: ['echo "Webpack Start"'],
      onBuildEnd: ['yalc push']
    })
  ],
  externals: [nodeExternals()],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i
      })
    ]
  }
}

module.exports = [merge(baseConfig, config2)]
