const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('dev', ['html', 'style'], () => {
    connect.server({
        root: 'dist',
        port: 8080,
        livereload: true
    })

    gulp.watch(['src/style/**/*.less'], ['style']);
    gulp.watch(['src/**/*.html'], ['html']);
    gulp.watch(['src/js/**/*.js'], ['script']);
})