// const path = require('path');

module.exports = {
    origin: {
        root: 'src',
        jsPath: 'src/js/**/*.js',
        stylePath: 'src/style/**/*.less',
        htmlPath: 'src/**/*.html',
    },
    output: {
        publicPath: 'dist',
        publicJs: 'dist/js',
        publicStyle: 'dist/style',
        publicHtml: 'dist'
    },
    server: {
        root: 'dist',
        port: 8080,
        livereload: true
    }
   
}