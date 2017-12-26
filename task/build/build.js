const gulp = require('gulp');
const sequence = require('gulp-sequence');

gulp.task('build', sequence('clone', 'html', 'style', 'script'))