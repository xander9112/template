'use strict';

const rimraf = require('rimraf');
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const gulpsync = require('gulp-sync')(gulp);
const config = require('./gulp/configs/main.config');
const register = require(`./gulp/utils/register`);

register(gulp, plugins, config)([
	'build-vendor',
	'build-js',
	'build-sprite',
	'build-styles',
	'copy',
	'serve',
	'watch',
	'deploy'
]);

gulp.task('clean', function (callback) {
	return rimraf(config.clean, callback);
});

gulp.task('build', gulp.parallel('build-vendor', 'build-js', 'build-sprite', 'build-styles', 'copy'));
gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serve')));
