var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var bower_files = require('main-bower-files');
var concat = require('gulp-concat');
/* This will add our bower dependencies to our index.html
 * so that we don't have to manually do it.
 */
gulp.task('bower', function () {
  // Concatenate and distribute JS
  gulp.src(bower_files({filter: "**/*.js"}))
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./dist/'));

  // Concatenate and distribute CSS
  gulp.src(bower_files({filter: "**/*.css"}))
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./dist/css'));

  // need bootstrap.css.map (exception)
  gulp.src('./client/bower_components/bootstrap/dist/css/bootstrap.css.map')
    .pipe(gulp.dest('./dist/css'));

  // distribute all fonts
  gulp.src(bower_files({filter: "**/*.ttf"}))
    .pipe(gulp.dest('./dist/fonts'));
  gulp.src(bower_files({filter: "**/*.woff"}))
    .pipe(gulp.dest('./dist/fonts'));
  gulp.src(bower_files({filter: "**/*.eot"}))
    .pipe(gulp.dest('./dist/fonts'));

  // need glyphicons-halflings-regular.woff2 (exception)
  gulp.src('./client/bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2')
    .pipe(gulp.dest('./dist/fonts'));

  return gulp.src('./client/index.html')
    /*.pipe(wiredep({
      directory: './client/bower_components'
    }))*/
    .pipe(gulp.dest('./dist/'));
});
