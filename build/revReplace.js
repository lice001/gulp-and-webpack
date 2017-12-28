const gulp = require('gulp');
const revReplace = require('gulp-rev-replace');

gulp.task('revReplace', () => {
    let manifest = gulp.src('dist/rev-manifest.json')
    return gulp.src('dist/**/*.html')
                .pipe(revReplace({manifest: manifest}))
                .pipe(gulp.dest('dist'))
})