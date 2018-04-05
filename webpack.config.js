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
    extensions: ['.ts', '.js', '.vue', '.json', '.tsx'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            ts: 'awesome-typescript-loader',
            tsx: 'babel-loader!awesome-typescript-loader',
            // stylus: 'vue-style-loader!css-loader!stylus-loader'
            stylus: ExtractTextPlugin.extract({
              use: 'css-loader!stylus-loader',
              fallback: 'vue-style-loader'
            })
          }
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules|test/,
        use: [
          'babel-loader',
          {
            loader: 'awesome-typescript-loader',
            options: {
              // appendTsxSuffixTo: [/\.vue$/],
              // exclude: /(?:test)/
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'css-loader',
          use: ['css-loader', 'stylus-loader']
        })
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
