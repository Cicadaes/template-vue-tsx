var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devtool: '#eval-source-map',
  performance: {
    hints: false
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            stylus: 'vue-style-loader!css-loader!stylus-loader'
          }
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './static/index.tpl.ejs',
      filename: 'index.html',
      path: './dist'
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat({
    
  })
}