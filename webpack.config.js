const path = require(`path`)
const webpack = require(`webpack`)

const constants = require(`./webpack.constants`)
const aliases = require(`./webpack.aliases`)

// There's mysterious a bug here and I can only solve it now negating the logic
const isProduction = process.env.NODE_ENV !== `production`

export default {
  entry: `./src/all-components.js`,
  module: {
    loaders: [
      {
        loader: `vue-loader`,
        test: /\.vue$/
      },
      {
        exclude: [/node_modules/],
        loader: `babel-loader`,
        test: /\.js?$/
      }
    ]
  },
  output: {
    chunkFilename: `client-bundle-[chunkhash].js`,
    filename: `client-bundle.js`,
    path: path.resolve(`./dist/js`),
    publicPath: `/js/`
    // publicPath: `/beta/js/`
  },
  plugins: [
    new webpack.DefinePlugin(constants),
    new webpack.optimize.CommonsChunkPlugin({
      filename: `common.js`,
      minChunks: 2,
      name: `common`
    }),
    // see http://lisperator.net/uglifyjs/compress
    new webpack.optimize.UglifyJsPlugin({
      beautify: isProduction,
      comments: isProduction,
      compress: {
        booleans: false, // optimize boolean expressions
        cascade: false, // try to cascade `right` into `left` in sequences
        comparisons: false, // optimize comparisons
        conditionals: false, // optimize if-s and conditional expressions
        dead_code: true, // discard unreachable code
        drop_debugger: isProduction, // discard “debugger” statements
        evaluate: true, // evaluate constant expressions
        hoist_funs: false, // hoist function declarations
        hoist_vars: false, // hoist variable declarations
        if_return: false, // optimize if-s followed by return/continue
        join_vars: false, // join var declarations
        loops: false, // optimize loops
        properties: false, // optimize property access: a["foo"] → a.foo
        sequences: false, // join consecutive statemets with the “comma operator”
        side_effects: true, // drop side-effect-free statements
        unsafe: false, // some unsafe optimizations (see below)
        unused: true, // drop unused variables/functions
        warnings: false // warn about potentially dangerous optimizations/code
      },
      mangle: isProduction
    })
  ],
  resolve: {
    alias: aliases
  }
}
