'use strict';

module.exports = (gulp, plugins, config) => () => {
	return gulp.src(`${config.paths.styles}/site.scss`)
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.sass().on('error', plugins.sass.logError))
		.pipe(plugins.autoprefixer({
			browsers: [ 'last 2 versions' ],
			cascade:  false
		}))
		.pipe(plugins.csso())
		.pipe(plugins.sourcemaps.write())
		.pipe(plugins.concat('style.css'))
		.pipe(gulp.dest(config.build.styles));
};
