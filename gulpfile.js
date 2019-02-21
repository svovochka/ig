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

gulp.task('html', function () {
    return gulp
        .src('src/pug/pages/**/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(replace('../../scss/', '../../css/'))
        .pipe(replace('../../', './'))
        .pipe(gulp.dest('./dist'));
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

gulp.task('js', function () {
    return gulp
        .src('./src/js/**/*')
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('assets', gulp.series('img', 'fonts', 'data', 'vendor','js'));

gulp.task('default', gulp.series('pug', 'html', 'sass', 'assets'));

