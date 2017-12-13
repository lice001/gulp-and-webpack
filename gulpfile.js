var gulp = require('gulp');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber')

var nunjucksRender = require('gulp-nunjucks-render');

var connect = require('gulp-connect');

var less = require('gulp-less');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var named = require('vinyl-named');
var webpack = require('webpack-stream');
var webapckConfig = require('./webpack.config.js')

var del = require('del');
var path = require('path');

console.log(process.env.NODE_ENV)

gulp.task('html', () => {
    return gulp.src(['app/**/*.html', '!app/layout/**/*.html'])
        .pipe(plumber())
        .pipe(nunjucksRender({
            path: ['app/layout']
        }))
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());

});

gulp.task('style', () => {

    let plugins = [
        autoprefixer({ browsers: ['last 5 version'] })
    ]

    return gulp.src('app/style/**/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(postcss(plugins))
        .pipe(gulp.dest('dist/style'))
        .pipe(connect.reload());
})

gulp.task('js', () => {
    return gulp.src(['app/js/**/*.js'])
        .pipe(named(function(file) {
             return file.relative.slice(0, -path.extname(file.path).length)
        }))
        .pipe(webpack(webapckConfig))
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload());
})

gulp.task('watch', () => {
    gulp.watch(['app/pages/**/*.html', 'app/index.html', './app/layout/**/*.html'], ['html']);
    // gulp.watch(['./app/js/**/*.js'], ['js']);
    gulp.watch(['app/style/**/*.less', 'app/style'], ['style']);
})

gulp.task('server', () => {
    connect.server({
        root: 'dist',
        port: 8080,
        livereload: true
    })
})

gulp.task('clean', () => {
    return del(['dist/style', 'dist/js', 'dist/pages'])
})

gulp.task('dev', ['html', 'style', 'js', 'server', 'watch'])

gulp.task('build', ['clean', 'html', 'style', 'js'])
