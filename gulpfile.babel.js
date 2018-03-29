import gulp from 'gulp'
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import del from 'del'
import eslint from 'gulp-eslint'
import webpack from 'webpack-stream'
import webpackConfig from './webpack.config'

const paths = {
  allSass: `sass/**/*.scss`,
  allSrcJs: `src/**/*.js`,
  allSrcToWatch: `src/**/*.{js,vue}`,
  clientBundle: `dist/client-bundle.js?(.map)`,
  clientEntryPoint: `src/all-components.js`,
  distCssDir: `dist/css`,
  distJsDir: `dist/js`,
  gulpFile: `gulpfile.babel.js`,
  webpackFile: `webpack.config.js`
}

gulp.task(`clean`, () => del([
  paths.distJsDir,
  paths.distCssDir
]))

gulp.task(`watch`, () => {
  gulp.watch(paths.allSrcToWatch, [`main`])
  gulp.watch(paths.allSass, [`css`])
})

gulp.task(`lint`, () =>
  gulp.src([
    paths.allSrcJs,
    paths.gulpFile,
    paths.webpackFile
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
)

gulp.task(`css`, () =>
  gulp.src(paths.allSass)
    .pipe(sass().on(`error`, sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(paths.distCssDir))
)

gulp.task(`main`, [`css`, `lint`, `clean`], () =>
  gulp.src(paths.clientEntryPoint)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.distJsDir))
)

gulp.task(`prod`, [`main`])

gulp.task(`default`, [`watch`, `main`])
