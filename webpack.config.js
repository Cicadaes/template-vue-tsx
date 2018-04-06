let { resolve } = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractStylus = new ExtractTextPlugin({
  filename: 'css/[name].[hash].css',
  allChunks: true,
  // disable: process.env.NODE_ENV === 'development' // inner<style>
})

module.exports = {
  entry: './src/index.tsx',
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
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              useBabel: true,
            }
          }
      ]
      },
      {
        test: /\.styl$/,
        exclude: [resolve(__dirname, 'src/style')],
        use: ['css-hot-loader'].concat(extractStylus.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: false,
                importLoaders: 2,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            {
              loader: 'stylus-loader'
            }
          ]
        }))
      },
      {
        test: /\.styl$/,
        include: [resolve(__dirname, 'src/style')],
        use: ['css-hot-loader'].concat(extractStylus.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: false,
                importLoaders: 2
              }
            },
            {
              loader: 'stylus-loader'
            }
          ]
        }))
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
    extractStylus
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.mode = 'production'
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat(

  )
}
