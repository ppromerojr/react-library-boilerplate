const path = require('path')

const baseConfig = {
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'), 
        use: [
          "thread-loader",
          "babel-loader"
        ]
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  optimization: {
    minimize: false
  },
  plugins: []
}

module.exports = baseConfig
