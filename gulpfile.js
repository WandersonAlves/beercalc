var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    cleanCss = require('gulp-clean-css'),
    copy = require('gulp-copy2'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create(),
    htmlreplace = require('gulp-html-replace'),
    imagemin = require('gulp-imagemin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress');

gulp.task('default', function () {
    'use strict';
    return gutil.log('Gulp is running!');
});
// build js files uglifying and concating then
gulp.task('build-js', function () {
    'use strict';
    return gulp.src([
      "bower_components/please-wait/build/please-wait.min.js",
      "controllers/loading-screen.controller.js",
      "bower_components/jquery/dist/jquery.min.js",
      "bower_components/angular/angular.js",
      "bower_components/angular-ui-router/release/angular-ui-router.js",
      "bower_components/angular-aria/angular-aria.js",
      "bower_components/angular-animate/angular-animate.js",
      "bower_components/angular-material/angular-material.js",
      "bower_components/bootstrap/dist/js/bootstrap.min.js",
      "bower_components/bootstrap/js/collapse.js",
      "beercalc.module.js",
      "beercalc.config.js",
      "beercalc.routes.js",
      "controllers/navigation.controller.js"
    ]).pipe(concat('build.js')).pipe(gulp.dest('public/'));
});

gulp.task('build-css', function () {
    'use strict';
    return gulp.src([
      "bower_components/please-wait/build/please-wait.css",
      "res/css/splash.css",
      "bower_components/angular-material/angular-material.css"
    ]).pipe(concatCss("build.css")).pipe(cleanCss({
        compatibility: 'ie8'
    })).pipe(gulp.dest('public/'));
});

gulp.task('copy', function () {
    'use strict';
    var paths = [
        {
          src: 'res/logo.png',
          dest: 'public/res/logo.png'
        },
        {
            src: 'res/svg/**',
            dest: 'public/res/svg/'
        },
        {
            src: 'views/**',
            dest: 'public/views/'
        }
    ];
    // NOTE Use templateCache to keepViews inline
    return copy(paths);
});

gulp.task('html-replace', function () {
    'use strict';
    gulp.src('index.html')
        .pipe(htmlreplace({
            'css': 'build.css',
            'js': 'build.js'
        })).pipe(gulp.dest('public/'));
});

gulp.task('image-min', function() {
    'use strict';
    gulp.src(['res/assets/**/*'])
        .pipe(imagemin([imagemin.gifsicle(), imagemin.jpegtran(), imagemin.optipng(), imagemin.svgo(), imageminJpegRecompress({method: 'smallfry'})], {verbose: true}))
        .pipe(gulp.dest('public/res/assets'));
});

gulp.task('build', function () {
    'use strict';
    runSequence('build-js', 'build-css', 'copy', 'html-replace');
});

gulp.task('server', function () {
    'use strict';
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 8080
    });

    gulp.watch(["./**/*.js", "index.html"]).on('change', browserSync.reload);
});
