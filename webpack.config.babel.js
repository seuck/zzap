/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const webpack = require('webpack')
const pkgjson = require('./package.json')

export default {
  entry: './src/all-components.js',
  output: {
    filename: 'client-bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: [/node_modules/]
      }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
      components: path.resolve(__dirname, pkgjson.paths.src, 'components'),
      utils: path.resolve(__dirname, pkgjson.paths.src, 'utils'),
      locales: path.resolve(__dirname, pkgjson.paths.src, 'locales')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 8000
  }
}
