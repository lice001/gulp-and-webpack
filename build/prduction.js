const gulp = require('gulp');

gulp.task('production', () => {
    process.env.NODE_ENV = 'production';
})