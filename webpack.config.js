const path = require(`path`)
const webpack = require(`webpack`)

const constants = require(`./webpack.constants`)
const aliases = require(`./webpack.aliases`)

const isProduction = process.env.NODE_ENV === `production`

export default {
  entry: `./src/all-components.js`,
  output: {
    path: path.resolve(`./dist/js`),
    publicPath: `/js/`,
    filename: `client-bundle.js`,
    chunkFilename: `client-bundle-[chunkhash].js`
  },
  devtool: `source-map`,
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: `vue-loader`
      },
      {
        test: /\.js?$/,
        loader: `babel-loader`,
        exclude: [/node_modules/]
      }
    ]
  },
  resolve: {
    alias: aliases
  },
  plugins: [
    new webpack.DefinePlugin(constants),
    new webpack.optimize.CommonsChunkPlugin({
      minChunks: 2,
      name: `common`,
      filename: `common.js`
    }),
    // see http://lisperator.net/uglifyjs/compress
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        sequences: false, // join consecutive statemets with the “comma operator”
        properties: false, // optimize property access: a["foo"] → a.foo
        dead_code: true, // discard unreachable code
        drop_debugger: !!isProduction, // discard “debugger” statements
        unsafe: false, // some unsafe optimizations (see below)
        conditionals: false, // optimize if-s and conditional expressions
        comparisons: false, // optimize comparisons
        evaluate: true, // evaluate constant expressions
        booleans: false, // optimize boolean expressions
        loops: false, // optimize loops
        unused: true, // drop unused variables/functions
        hoist_funs: false, // hoist function declarations
        hoist_vars: false, // hoist variable declarations
        if_return: false, // optimize if-s followed by return/continue
        join_vars: false, // join var declarations
        cascade: false, // try to cascade `right` into `left` in sequences
        side_effects: true, // drop side-effect-free statements
        warnings: false // warn about potentially dangerous optimizations/code
      },
      mangle: false,
      beautify: true,
      comments: true
    })
  ]
}
