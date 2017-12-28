const gulp = require('gulp');
const connect = require('gulp-connect');
const minify = require('gulp-minify-html');
const gulpIf = require('gulp-if');

gulp.task('html', () => {
	console.log(process.env.NODE_ENV)
	return gulp.src('src/**/*.html')
			.pipe(gulp.dest('dist'))
			.pipe(gulpIf(process.env.NODE_ENV != 'production', connect.reload()))
})
