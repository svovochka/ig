var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var gulpCopy = require('gulp-copy');
var replace = require('gulp-replace');

gulp.task('pug', function () {
    return gulp
        .src('src/pug/**/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(replace('../../scss/', '../../css/'))
        .pipe(gulp.dest('./dist/html'));
});

gulp.task('sass', function () {
    return gulp
        .src('./src/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('img', function () {
    return gulp
        .src('./src/img/**/*')
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('fonts', function () {
    return gulp
        .src('./src/fonts/**/*')
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('vendor', function () {
    return gulp
        .src('./src/vendor/**/*')
        .pipe(gulp.dest('./dist/vendor'));
});

gulp.task('data', function () {
    return gulp
        .src('./src/data/**/*')
        .pipe(gulp.dest('./dist/data'));
});

gulp.task('assets', gulp.series('img', 'fonts', 'data', 'vendor'));

gulp.task('default', gulp.series('pug', 'sass', 'assets'));

