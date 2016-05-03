'use strict';

var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')(),
    nano = require('gulp-cssnano');

gulp.task('sass', function () {
  gulp.src('./src/scss/**/*.scss')
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.concatCss("screen.css"))
    .pipe(nano())
    .pipe(gulp.dest('./css'));
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);