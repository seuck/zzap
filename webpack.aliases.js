const path = require(`path`)
const pkgjson = require(`./package.json`)

module.exports = {
  // due to error `You are using the runtime-only build of Vue where the template compiler`
  // https://stackoverflow.com/questions/42881531/vue-with-browserify-on-runtime-only-build
  vue: `vue/dist/vue.common.js`,
  api: path.resolve(__dirname, pkgjson.paths.src, `api`),
  components: path.resolve(__dirname, pkgjson.paths.src, `components`),
  utils: path.resolve(__dirname, pkgjson.paths.src, `utils`),
  locales: path.resolve(__dirname, pkgjson.paths.src, `locales`),
  constants: path.resolve(__dirname, pkgjson.paths.src, `constants`)
}
