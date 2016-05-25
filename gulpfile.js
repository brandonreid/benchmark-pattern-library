var gulp = require('gulp');
var livingcss = require('gulp-livingcss');
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix'),
    autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
var LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleanCSSPlugin = new LessPluginCleanCSS({advanced: true});
var connect = require('gulp-connect');


gulp.task('library', function () {
  gulp.src('less/*.less')
    .pipe(livingcss({
      loadcss: false,
      template: './library-template/template.hbs',
      preprocess: function(context, template, Handlebars) {
        context.title = 'Benchmark Styles';

        // TODO: Use this to load app.css when gulp-livingcss is updated
        // return livingcss.readFileGlobs('./css/*', function(data, file) {
        //   context.stylesheets.push(file);
        // });
      }
    }))
    .pipe(gulp.dest('./pattern_library/'))
});

gulp.task('less', function () {
  // App Styles
  gulp.src(['./less/app.less'])
    .pipe(less({
      plugins: [autoprefix, cleanCSSPlugin]
    }))
    .pipe(gulp.dest('./pattern_library/css/'));
  // Pattern Library Styles
  gulp.src(['./library-template/less/library.less'])
    .pipe(less({
      plugins: [autoprefix, cleanCSSPlugin]
    }))
    .pipe(gulp.dest('./pattern_library/css/'));
});

gulp.task('fonts', function () {
  gulp.src([
    './fonts/**/*'
  ])
    .pipe(gulp.dest('./pattern_library/fonts/'));
});

gulp.task('server', function () {
  connect.server({
    root: './pattern_library/',
    port: '9000',
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch([
    './pattern_library/index.html'
  ], function (event) {
    return gulp
      .src(event.path)
      .pipe(connect.reload());
  });
  gulp.watch(['./less/**/*.less'], ['less', 'library']);
  gulp.watch(['./library-template/less/**/*.less'], ['less', 'library']);
  gulp.watch(['./library-template/**/*.hbs'], ['less', 'library']);
});

gulp.task('dev', ['less', 'library', 'fonts', 'server', 'watch']);