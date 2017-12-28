const gulp = require('gulp');
const rev = require('gulp-rev');

gulp.task('rev', () => {
    return gulp.src(['dist/**/*.js', 'dist/**/*.css'])
                .pipe(rev())
                .pipe(gulp.dest('dist'))
                .pipe(rev.manifest())
                .pipe(gulp.dest('dist'))
})