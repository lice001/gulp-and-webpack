const gulp = require('gulp');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const plumber = require('gulp-plumber');
const connect = require('gulp-connect');
// const gulpIf = require('gulp-if');

gulp.task('style', () => {
    return gulp.src('src/style/**/*.less')
            .pipe(plumber())
            .pipe(less())
            .pipe(postcss([
                autoprefixer({ browsers: ['last 5 version'] })
            ]))
            .pipe(gulp.dest('dist/style'))
            .pipe(connect.reload());
})