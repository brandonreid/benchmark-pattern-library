var gulp = require('gulp'),
    ngConstant = require('gulp-ng-constant'),
    env = require('node-env-file'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    templateCache = require('gulp-angular-templatecache'),
    connect = require('gulp-connect');


gulp.task('scripts', function () {
    gulp.src([
        './app/js/*.js'
    ])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./build/js'));
    gulp.src([
        './app/js/printPDFjs/xepOnline.jqPlugin.js'
        ]).pipe(gulp.dest('./build/js'));
});

gulp.task('less', function () {
    gulp.src([
        './app/less/app.less',
    ])
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./build/css'));
});


gulp.task('libraryless', function () {
    gulp.src([
        './app/pl-specific-less/library.less',
    ])
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('copy-index', function () {
    gulp.src('./app/index.html')
        .pipe(gulp.dest('./build'));
});

gulp.task('templates', function () {
    //combine all template files of the app into a js file
    gulp.src([
        '!./app/index.html',
        './app/**/*.html'
    ])
        .pipe(templateCache('templates.js', {
            root: '',
            module: 'templates',
            standalone: true
        }))
        .pipe(gulp.dest('./build/js'));
});

gulp.task('favicon', function () {
    gulp.src('./app/*')
        .pipe(gulp.dest('./build'));
});

gulp.task('dep-js', function () {
    gulp.src([
        './bower_components/angular/angular.js',
        './bower_components/angular-ui-router/release/angular-ui-router.js',
        './bower_components/angular-cookie/angular-cookie.js',
        './bower_components/ngstorage/ngStorage.js',
        './bower_components/angulartics/dist/angulartics.min.js',
        './bower_components/angulartics/dist/angulartics-segmentio.min.js',
        './bower_components/angular-sanitize/angular-sanitize.js',
        './bower_components/d3/d3.js',
        './bower_components/smart-table/dist/smart-table-main.js',
        './bower_components/lodash/dist/lodash.js',
        './bower_components/angular-google-maps/dist/angular-google-maps.js',
        './bower_components/angular-ui-router-styles/ui-router-styles.js',
        './bower_components/angular-ui-select/dist/select.js',
        './bower_components/angular-moment/angular-moment.js',
        './bower_components/moment/moment.js',
        './bower_components/c3/c3.js',
        './bower_components/angular-chart/angular-chart.js',
        './bower_components/angular-circular-navigation/angular-circular-navigation.js',
        './bower_components/angular-truncate/src/truncate.js',
        './bower_components/angular-strap/dist/angular-strap.js',
        './bower_components/angular-strap/dist/angular-strap.tpl.js',
        './bower_components/angulartics/dist/angulartics.min.js',
        './bower_components/angulartics/dist/angulartics-segmentio.min.js'
    ])
        .pipe(concat('deps.js'))
        .pipe(gulp.dest('./build/js'));
});

gulp.task('dep-css', function() {
    gulp.src([
        './bower_components/angular-ui-select/dist/select.css',
        './bower_components/c3/c3.css'
    ])
        .pipe(concat('deps.css'))
        .pipe(gulp.dest('./build/css/'));
});

gulp.task('fonts', function () {
    gulp.src([
        './app/fonts/*'
    ])
        .pipe(gulp.dest('./build/fonts'));
});

gulp.task('server', function () {
    connect.server({
        root: 'build',
        port: process.env.PORT || '9000',
        livereload: true
    });
});

gulp.task('watch', function () {
    gulp.watch([
        'build/**/*.html',
        'build/**/*.js',
        'build/**/*.css',
    ], function (event) {
        return gulp
            .src(event.path)
            .pipe(connect.reload());
    });
    gulp.watch(['./app/**/*.js'], ['scripts']);
    gulp.watch(['./app/**/*.html', '!./app/index.html'], ['templates']);
    gulp.watch('./app/less/*.less', ['less']);
    gulp.watch('./app/pl-specific-less/*.less', ['libraryless']);
    gulp.watch('./app/less/*/*.less', ['less']);
    gulp.watch('./app/index.html', ['copy-index']);
});

gulp.task('default', ['scripts', 'templates', 'less', 'libraryless', 'copy-index', 'favicon', 'dep-js', 'dep-css', 'fonts']);
gulp.task('dev', ['scripts', 'templates', 'less', 'libraryless', 'copy-index', 'favicon', 'dep-js', 'dep-css', 'fonts', 'watch', 'server']);