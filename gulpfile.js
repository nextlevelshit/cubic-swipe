'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync')

gulp.task('styles', styles)
gulp.task('styles:watch', watch)

function reloadBrowserSync(cb) {
  browserSync.reload()
  cb()
}

function styles() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
}

function watch() {
    gulp.watch('./scss/**/*.scss', ['styles'])
}
