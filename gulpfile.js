var gulp = require('gulp');
var livingcss = require('gulp-livingcss');
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix'),
    autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
var LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleanCSSPlugin = new LessPluginCleanCSS({advanced: true});

// example livingcss task
// gulp.task('default', function () {
//   gulp.src('src/styles.css')
//     .pipe(livingcss())
//     .pipe(gulp.dest('dist'))
// });

gulp.task('less', function () {
  gulp.src(['./less/app.less'])
    .pipe(less({
      plugins: [autoprefix, cleanCSSPlugin]
    }))
    .pipe(gulp.dest('./css'));
});