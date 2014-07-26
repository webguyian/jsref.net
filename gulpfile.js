// Install gulp and plugins

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    useref = require('gulp-useref'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify');

gulp.task('css', function() {
  return gulp.src('src/css/*')
  .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
  .pipe(gulp.dest('dist/assets/css'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(minifycss())
  .pipe(gulp.dest('dist/assets/css'))
  .pipe(notify({ message: 'CSS task complete' }));
});

gulp.task('js', function() {
  return gulp.src(['src/js/smooth-scroll.js', 'src/js/main.js'])
  .pipe(concat('main.js'))
  .pipe(gulp.dest('dist/assets/js'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(uglify())
  .pipe(gulp.dest('dist/assets/js'))
  .pipe(notify({ message: 'JS task complete' }));
});

gulp.task('html', function() {
  return gulp.src('src/*.html')
  .pipe(useref())
  .pipe(gulp.dest('dist/'))
  .pipe(notify({ message: 'HTML task complete' }));
});

gulp.task('img', function() {
  return gulp.src('src/img/*')
  .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
  .pipe(gulp.dest('dist/assets/img'))
  .pipe(notify({ message: 'IMG task complete' }));
});

gulp.task('default', ['css', 'js', 'html', 'img'], function() {

});