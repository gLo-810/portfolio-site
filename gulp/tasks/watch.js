const browserSync = require('browser-sync').create(),
gulp = require('gulp'),
watch = require('gulp-watch');


gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });


  watch('./app/assets/scripts/**/*.js', () => {
    gulp.start('scripts');
  });

  watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('scriptsRefresh');
  })


});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/main.css')
    .pipe(browserSync.stream());
});



gulp.task('scriptsRefresh', ['scripts'], function() {
  browserSync.reload();
});
