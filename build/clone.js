const gulp = require('gulp');
const del = require('del');

gulp.task('clone', () => {
	return del('dist');
})