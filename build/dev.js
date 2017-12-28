const gulp = require('gulp');
const connect = require('gulp-connect');
const config = require('../config');

gulp.task('dev', ['html', 'style', 'script'], () => {
    connect.server({
        root: 'dist',
        port: 8080,
        livereload: true
    })

    gulp.watch(['src/**/*.less'], ['style']);
    gulp.watch(['src/**/*.html'], ['html']);
    gulp.watch(['src/js/**/*.js'], ['script']);
})