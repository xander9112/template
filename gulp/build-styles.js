'use strict';

module.exports = (gulp, plugins, config) => () => {
	return gulp.src(config.paths.styles)
		.pipe(plugins.less())
		.pipe(plugins.autoprefixer({
			browsers: [ 'last 2 versions' ],
			cascade:  false
		}))
		.pipe(plugins.concat('style.css'))
		.pipe(plugins.if(config.production, plugins.csso()))
		.pipe(gulp.dest(config.build.styles));
};
/*
 'use strict';

 module.exports = (gulp, plugins, config) => () => {
 return gulp.src(config.paths.sass)
 .pipe(plugins.sourcemaps.init())
 .pipe(plugins.sass().on('error', plugins.sass.logError))
 .pipe(plugins.autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
 .pipe(plugins.minifyCss())
 .pipe(plugins.sourcemaps.write())
 .pipe(plugins.rename({ suffix: '.min' }))
 .pipe(gulp.dest(`${config.paths.dist}/${config.output.css}`))
 };
 */
