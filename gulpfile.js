var gulp = require('gulp');

var nunjucksRender = require('gulp-nunjucks-render');

var connect = require('gulp-connect');

var less = require('gulp-less');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

var named = require('vinyl-named');
var webpack = require('webpack-stream');

var del = require('del');
var path = require('path');

gulp.task('html', () => {
    gulp.src('app/pages/**/*.html')
        .pipe(nunjucksRender({
            path: ['app/templates']
        }))
        .pipe(gulp.dest('dist/pages'))
        .pipe(connect.reload());

});

gulp.task('style', () => {

    let plugins = [
        autoprefixer({ browsers: ['last 5 version'] })
    ]

    gulp.src('app/style/**/*.less')
        .pipe(less())
        .pipe(postcss(plugins))
        .pipe(gulp.dest('dist/style'))
        .pipe(connect.reload());
})

gulp.task('js', () => {
    gulp.src(['app/js/**/*.js'])
        .pipe(named(function(file) {
             return file.relative.slice(0, -path.extname(file.path).length)
        }))
        .pipe(webpack({
            watch: true,
            resolve: {
                extensions: ['', '.js']
            },
            module: {
                rules: [{
                    test: /\.js$/,
                    use: {
                        loader: "babel-loader",
                    }
                }]
            }
        }))
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload());
})

gulp.task('watch', () => {
    gulp.watch(['./app/pages/**/*.html', './app/templates/**/*.html'], ['html']);
    // gulp.watch(['./app/js/**/*.js'], ['js']);
    gulp.watch(['./app/style/**/*.less'], ['style']);
})

gulp.task('server', () => {
    connect.server({
        root: 'dist',
        port: 8080,
        livereload: true
    })
})

gulp.task('dev', ['html', 'style', 'js', 'server', 'watch'])