var gulp = require('gulp');
var livingcss = require('gulp-livingcss');
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix'),
    autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
var LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleanCSSPlugin = new LessPluginCleanCSS({advanced: true});


gulp.task('patterns', function () {
  gulp.src('less/*.less')
    .pipe(livingcss({
      loadcss: false,
      template: './library-template/template.hbs'
    }))
    .pipe(gulp.dest('pattern_library'))
});

gulp.task('less', function () {
  gulp.src(['./less/app.less'])
    .pipe(less({
      plugins: [autoprefix, cleanCSSPlugin]
    }))
    .pipe(gulp.dest('./css'));
});