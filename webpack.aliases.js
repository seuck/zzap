const path = require(`path`)
const pkgjson = require(`./package.json`)

module.exports = {
  api: path.resolve(__dirname, pkgjson.paths.src, `api`),
  components: path.resolve(__dirname, pkgjson.paths.src, `components`),
  utils: path.resolve(__dirname, pkgjson.paths.src, `utils`),
  locales: path.resolve(__dirname, pkgjson.paths.src, `locales`),
  constants: path.resolve(__dirname, pkgjson.paths.src, `constants`),
  routes: path.resolve(__dirname, pkgjson.paths.src, `routes`)
}
