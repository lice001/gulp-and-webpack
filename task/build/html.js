const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('html', () => {
	console.log(process.env.NODE_ENV)
	return gulp.src('src/**/*.html')
			.pipe(gulp.dest('dist'))
			.pipe(connect.reload())
})