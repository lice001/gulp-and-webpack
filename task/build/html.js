const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('html', () => {
	return gulp.src('src/**/*.html')
			.pipe(gulp.dest('dist'))
			.pipe(connect.reload())
})