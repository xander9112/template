var gulp = require('gulp');
var rimraf = require('rimraf');

var config = require('./config'),
	production = config.production,
	path = config.path;

gulp.task('clean', function (callback) {
	return rimraf(path.clean, callback);
});

gulp.task('build', [ 'scripts', 'styles', 'images', 'fonts', 'sprite' ]);

gulp.task('default', [ 'clean' ], function () {
	gulp.start('build');
});
