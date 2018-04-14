const path = require(`path`)
const pkgjson = require(`./package.json`)

module.exports = {
  api: path.resolve(__dirname, pkgjson.paths.src, `api`),
  components: path.resolve(__dirname, pkgjson.paths.src, `components`),
  constants: path.resolve(__dirname, pkgjson.paths.src, `constants`),
  locales: path.resolve(__dirname, pkgjson.paths.src, `locales`),
  routes: path.resolve(__dirname, pkgjson.paths.src, `routes`),
  utils: path.resolve(__dirname, pkgjson.paths.src, `utils`)
}
