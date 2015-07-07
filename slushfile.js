var gulp = require('gulp');

gulp.task('default', function(done) {
  gulp.src(__dirname + '/templates/app/**')
  .pipe(gulp.dest('./'));
});
