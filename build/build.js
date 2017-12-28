const gulp = require('gulp');
const sequence = require('gulp-sequence');

gulp.task('build', sequence('production', 'clone', 'html', 'style', 'script', 'rev', 'revReplace'))