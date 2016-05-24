'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const config = require('./gulp/configs/main.config');
const register = require(`./gulp/utils/register`);

register(gulp, plugins, config)([
	'build-vendor',
	'build-js',
	'build-styles',
	'build-styles-blocks',
	'copy',
	'serve',
	'watch',
	'deploy'
]);

gulp.task('build', gulp.parallel('build-vendor', 'build-js', 'build-styles-blocks', 'build-styles', 'copy'));
gulp.task('default', gulp.series('build', gulp.parallel('watch', 'serve')));
