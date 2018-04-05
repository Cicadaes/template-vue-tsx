var { resolve } = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devtool: '#eval-source-map',
  performance: {
    hints: false
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.tsx'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.html$/,
        loader: 'vue-template-loader',
        include: /src/
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract(['css-loader?modules', 'stylus-loader'])
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './static/index.tpl.ejs',
      filename: 'index.html',
      path: './dist'
    }),
    new ExtractTextPlugin('style.css')
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.mode = 'production'
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat(

  )
}
