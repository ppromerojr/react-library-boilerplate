const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const baseConfig = require('./webpack.config.common.js')

const production = {
  mode: 'production',
  entry: {
    framework: path.resolve(__dirname, '../src/framework/widgets/export.js'),
    'framework.min': path.resolve(
      __dirname,
      '../src/framework/widgets/export.js'
    )
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    library: '@sample/framework',
    libraryTarget: 'commonjs2'
  },
  plugins: [new webpack.ProgressPlugin(), new CleanWebpackPlugin()],
  externals: [nodeExternals()],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        test: /\.min.js(\?.*)?$/i
      })
    ]
  }
}

module.exports = merge(baseConfig, production)
