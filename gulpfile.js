var gulp = require('gulp'),
base64 = require('gulp-css-base64'),
htmlmin = require('gulp-html-minifier'),
cssmin = require('gulp-cssnano'),
concatcss = require('gulp-concat-css');

gulp.task('css', function () {
    return gulp.src('css/*.css')
		.pipe(concatcss("main.css"))
        .pipe(base64({extensionsAllowed: ['.png']}))
		.pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['css'],function () {
  gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest('dist'))
});