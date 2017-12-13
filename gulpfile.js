var gulp = require ('gulp');
var sass = require ('gulp-sass');
var webserver = require('gulp-webserver');
gulp.task('styles',function(){
  return gulp.src('./sass/**/*.scss')
  .pipe(sass().on('error',sass.logError))
  .pipe(gulp.dest('./build'));
});

gulp.task('watch', function(){
  gulp.watch('./sass/**/*.scss',['styles']);
});

gulp.task('webserver',function(){
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: "/index.html"
    }));
})
gulp.task('serve',['webserver','watch']);
