const path = require(`path`)
const webpack = require(`webpack`)
const constants = require(`./webpack.constants`)
const aliases = require(`./webpack.aliases`)
const UglifyJsPlugin = require(`uglifyjs-webpack-plugin`)
const { VueLoaderPlugin } = require(`vue-loader`)
const { paths, values } = require(`./package.json`)

const isProduction = process.env.NODE_ENV === `production`

export default {
  entry: path.resolve(paths.entryJS),
  module: {
    rules: [
      {
        loader: `vue-loader`,
        test: /\.vue$/
      },
      {
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        ),
        loader: `babel-loader`,
        test: /\.js$/
      }
    ]
  },
  output: {
    chunkFilename: `${values.bundle_filename}-[chunkhash].js`,
    filename: `${values.bundle_filename}.js`,
    path: path.resolve(`${paths.publicDir}/${paths.publicJsDir}`),
    publicPath: `/${paths.publicJsDir}/`
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin(constants),
    // see https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
    new UglifyJsPlugin({
      uglifyOptions: {
        mangle: isProduction
      }
    })
  ],
  resolve: {
    alias: aliases
  }
}
