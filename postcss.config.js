const isProduction = process.env.NODE_ENV === `production`
const { browserslist: browsers } = require(`./package.json`)

const plugins = [
  require(`autoprefixer`),
  require(`cssnano`)({
    preset: [`advanced`, {
      autoprefixer: { browsers },
      // setting all options to false as
      // we don't want font-faces and keyframes to be removed as they are needed
      // counterStyle => we don’t use it
      // namespace => we don’t use namespaces (only material design)
      discardUnused: false,
      // deactivate keyframe merging
      mergeIdents: false,
      // following the advise of https://developer.mozilla.org/en-US/docs/Web/CSS/font-family#<family-name>
      // "Font family names containing whitespace should be quoted."
      minifyFontValues: false,
      // turn it off as each clientlib is minified via gcc on publish
      normalizeWhitespace: false,
      // deactivate keyframe renaming
      reduceIdents: false,
      zindex: false
    }]
  })]

if (!isProduction) {
  plugins.push(require(`perfectionist`)({ indentSize: 2 }))
}

module.exports = (/* context */) => ({ plugins })
