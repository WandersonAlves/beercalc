var gulp = require('gulp'),
    copy = require('gulp-copy2'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync').create(),
    imagemin = require('gulp-imagemin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    clean = require('gulp-clean'),
    wiredep = require('wiredep').stream,
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if'),
    minifyCss = require('gulp-clean-css'),
    useref = require('gulp-useref'),
    htmlreplace = require('gulp-html-replace'),
    ngAnnotate = require('gulp-ng-annotate'),
		reload = browserSync.reload;

// build js files uglifying and concating then
gulp.task('build-js', function() {
    'use strict';
    return gulp
        .src('./app/index.html')
        .pipe(wiredep({
            directory: './app/bower_components' //inject dependencies
        }))
        .pipe(useref())
        .pipe(gulpif('*.js', ngAnnotate()))
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.js', gulp.dest('./public')));
});
gulp.task('build-css', function() {
    return gulp
        .src('./app/index.html')
        .pipe(useref()) //take a streem from index.html comment
        .pipe(gulpif('*.css', minifyCss())) // if .css file, minify
        .pipe(gulpif('*.css', gulp.dest('./public'))); // copy to dist
});
gulp.task('copy', function() {
    'use strict';
    var paths = [{
        src: './app/res/**/',
        dest: './public/res/'
    }, {
        src: './app/views/**/',
        dest: './public/views/'
    }, {
        src: './app/manifest.json',
        dest: './public/manifest.json'
    }, {
        src: './app/service-worker.js',
        dest: './public/service-worker.js'
    }, {
        src: './app/push-config.js',
        dest: './public/push-config.js'
    }, {
        src: './app/mocks/**/',
        dest: './public/mocks/'
    }];
    // NOTE Use templateCache to keepViews inline
    return copy(paths);
});
gulp.task('image-min', function() {
    'use strict';
    return gulp
        .src(['app/res/assets/**/*'])
        .pipe(imagemin([
            imagemin.gifsicle(),
            imagemin.jpegtran(),
            imagemin.optipng(),
            imagemin.svgo(),
            imageminJpegRecompress({
                method: 'smallfry'
            })
        ], {
            verbose: true
        }))
        .pipe(gulp.dest('./public/res/assets'));
});

gulp.task('clean', function() {
    'use strict';
    return gulp
        .src('public/', {
            read: false
        })
        .pipe(clean({
            force: true
        }));
});
gulp.task('html-replace', function() {
    'use strict';
    gulp
        .src('app/index.html')
        .pipe(useref({
            noAssets: true
        }))
        .pipe(gulp.dest('public'));
});
gulp.task('build', function() {
    'use strict';
    runSequence('clean', 'build-js', 'build-css', 'html-replace', 'copy');
});

gulp.task('unit-test', function() {
    new karma({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }).start();
});

gulp.task('server', function() {
    'use strict';
    browserSync.init({
        server: {
            baseDir: "app"
        },
        port: 8080
    });

		gulp.watch("app/controllers/**/.*js").on("change", reload);
});
