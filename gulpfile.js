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
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/particles.js/particles.min.js',
        'controllers/particles.js',
        'bower_components/angular/angular.min.js',
        'neweb-module.js',
        'controllers/main-controller.js'
    ]).pipe(concat('build.js')).pipe(gulp.dest('public/'));
});

gulp.task('build-css', function () {
    'use strict';
    return gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/animate.css/animate.min.css',
        'res/css/base.css',
        'res/css/scroll.css'
    ]).pipe(concatCss("build.css")).pipe(cleanCss({
        compatibility: 'ie8'
    })).pipe(gulp.dest('public/'));
});

gulp.task('copy', function () {
    'use strict';
    var paths = [
        {
            src: 'res/assets/**',
            dest: 'public/res/assets/'
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
    runSequence('build-js', 'build-css', 'copy', 'html-replace', 'image-min');
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
