import gulp from 'gulp'
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import del from 'del'
import eslint from 'gulp-eslint'
import webpack from 'webpack-stream'
import webpackConfig from './webpack.config'
import { paths } from './package.json'

gulp.task(`clean`, () => del([
  `${paths.publicDir}/${paths.publicJsDir}`,
  `${paths.publicDir}/${paths.publicCssDir}`
]))

gulp.task(`watch`, () => {
  gulp.watch(paths.allSrcToWatch, [`js`])
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
    .pipe(gulp.dest(`${paths.publicDir}/${paths.publicCssDir}`))
)

gulp.task(`js`, () =>
  gulp.src(paths.entryJS)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(`${paths.publicDir}/${paths.publicJsDir}`))
)

gulp.task(`main`, [`clean`, `lint`, `css`, `js`])

gulp.task(`prod`, [`main`])

gulp.task(`default`, [`watch`, `main`])
