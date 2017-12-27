const gulp = require('gulp');

const path = require('path');
const gulpIf = require('gulp-if');
const named = require('vinyl-named');
const uglify = require('gulp-uglify');
const webpack = require('webpack-stream');

var connect = require('gulp-connect');

gulp.task('script', () => {
    return gulp.src('src/js/**/*.js')
        .pipe(named((file) => {
            return file.relative.slice(0, -path.extname(file.path).length)
        }))
	    .pipe(webpack({
	        resolve: {
	            extensions: ['.js']
	        },
	        module: {
	            rules: [{
	                test: /\.js$/,
	                exclude: /node_modules/,
	                use: {
	                    loader: "babel-loader",
	                }
	            }]
	        }
	    }))
	    .pipe(gulp.dest('dist/js'))
	    .pipe(connect.reload())

})