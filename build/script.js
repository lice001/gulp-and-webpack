const gulp = require('gulp');

const path = require('path');
const gulpIf = require('gulp-if');
const named = require('vinyl-named');
const uglify = require('gulp-uglify');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');

var connect = require('gulp-connect');

gulp.task('script', () => {
    return gulp.src('src/js/**/*.js')
        .pipe(named((file) => {
            return file.relative.slice(0, -path.extname(file.path).length)
        }))
	    .pipe(webpackStream({
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
			},
			plugins: [
				new webpack.optimize.CommonsChunkPlugin({
					name: 'vendor',
					filename: 'vendor.min.js'
				}),
			]
		}))
		.pipe(gulpIf(process.env.NODE_ENV == 'production', uglify()))
	    .pipe(gulp.dest('dist/js'))
	    .pipe(gulpIf(process.env.NODE_ENV != 'production', connect.reload()))

})