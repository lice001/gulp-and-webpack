const gulp = require('gulp');
const sequence = require('gulp-sequence');
const config = require('../config');

process.env.NODE_ENV = 'production';

gulp.task('build', sequence('clone', 'html', 'style', 'script'))