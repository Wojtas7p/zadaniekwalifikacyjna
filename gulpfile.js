const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
  return gulp
    .src('style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function () {
  gulp.watch('style.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));