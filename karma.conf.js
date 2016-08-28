// Karma configuration
// Generated on Mon Aug 22 2016 22:44:18 GMT-0300 (BRT)

module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',
		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],
		// list of files / patterns to load in the browser
		files: [
      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-material/angular-material.js',
      'beercalc.module.js',
      'beercalc.config.js',
      'beercalc.routes.js',
      'controllers/**/*.js',
      'test/**/*.js'
    ],
		// list of files to exclude
		exclude: [
      'controllers/loading-screen.controller.js'
    ],
		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			"beercalc.routes.js": ["coverage"],
			"!(bower_components|node_modules|public|reports|test)/**/!(*.spec).js": ["coverage"],
			"**/*.html": ["ng-html2js"]
		},
		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['coverage', 'spec'],
		coverageReporter: {
			type: "lcov",
			dir: "reports",
			subdir: "coverage",
			check: {
				global: {
					statements: 90,
					branches: 80,
					functions: 90,
					lines: 80
				}
			}
		},
		specReporter: {
			suppressErrorSummary: true,
			suppressFailed: false,
			suppressPassed: false,
			suppressSkipped: false
		},
		plugins: [
        "karma-phantomjs-launcher",
        "karma-chrome-launcher",
        "karma-jasmine",
        "karma-coverage",
        "karma-spec-reporter",
        "karma-ng-html2js-preprocessor"
    ],
		// web server port
		port: 9876,
		// enable / disable colors in the output (reporters and logs)
		colors: true,
		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,
		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,
		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],
		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,
		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity
	})
}
