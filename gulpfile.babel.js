/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

import gulp from 'gulp';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import del from 'del';
import eslint from 'gulp-eslint';
import webpack from 'webpack-stream';
import webpackConfig from './webpack.config.babel';

// Without Babel
// const gulp = require('gulp');
// const babel = require('gulp-babel');
// const del = require('del');
// const exec = require('child_process').exec;

const paths = {
  allSrcJs: 'src/**/*.js?(x)',
  serverSrcJs: 'src/server/**/*.js?(x)',
  sharedSrcJs: 'src/shared/**/*.js?(x)',
  clientEntryPoint: 'src/client/app.js',
  allSass: 'sass/**/*.scss',
  clientBundle: 'dist/client-bundle.js?(.map)',
  gulpFile: 'gulpfile.babel.js',
  webpackFile: 'webpack.config.babel.js',
  libDir: 'lib',
  distCssDir: 'dist/css',
  distJsDir: 'dist/js'
};

gulp.task('clean', () => del([
  paths.libDir,
  paths.clientBundle,
  paths.distCssDir
]));

gulp.task('build', ['lint', 'clean'], () =>
  gulp.src(paths.allSrcJs)
    .pipe(babel())
    .pipe(gulp.dest(paths.libDir))
);

gulp.task('main', ['sass', 'lint', 'clean'], () =>
  gulp.src(paths.clientEntryPoint)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(paths.distJsDir))
);

gulp.task('watch', () => {
  gulp.watch(paths.allSrcJs, ['main']);
  gulp.watch(paths.allSass, ['sass']);
});

gulp.task('lint', () =>
  gulp.src([
    paths.allSrcJs,
    paths.gulpFile,
    paths.webpackFile
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);

gulp.task('sass', () =>
  gulp.src(paths.allSass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.distCssDir))
);

gulp.task('default', ['watch', 'main']);
