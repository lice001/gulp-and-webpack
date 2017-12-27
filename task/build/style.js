const gulp = require('gulp');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const plumber = require('gulp-plumber');
const connect = require('gulp-connect');
const named = require('vinyl-named');
const gulpIf = require('gulp-if');
const csso = require('gulp-csso');

gulp.task('style', () => {
    return gulp.src('src/style/**/*.less')
            .pipe(named())
            .pipe(plumber())
            .pipe(less())
            .pipe(postcss([
                autoprefixer({ browsers: ['last 5 version'] })
            ]))
            .pipe(gulpIf(process.env.NODE_ENV == 'production', csso({
                restructure: false,
                sourceMap: true,
                debug: true
            })))
            .pipe(gulp.dest('dist/style'))
            .pipe(connect.reload());
})