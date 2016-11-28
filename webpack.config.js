const path = require('path');
const webpack = require('webpack-stream').webpack;
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	context: path.resolve(__dirname, 'src/assets'),
	entry:   './js/index',
	output:  {
		path:       path.resolve(__dirname, 'assets/js/'),
		publicPath: '/',
		filename:   '[name].js'
	},

	module: {
		/*preLoaders: [ //добавили ESlint в preloaders
		 {
		 test:    /\.js$/,
		 loaders: [ 'eslint' ],
		 include: [
		 path.resolve(__dirname, '../../src/assets/js')
		 ]
		 }
		 ],*/
		loaders: [
			{
				test:   /\.js$/,
				loader: 'babel?presets[]=es2015'
			}
		]
	},

	resolve: {
		modulesDirectories: [ 'node_modules' ],
		extensions:         [ '', '.js' ]
	},

	resolveLoader: {
		modulesDirectories: [ 'node_modules' ],
		moduleTemplates:    [ '*-loader', '*' ],
		extensions:         [ '', '.js' ]
	},

	devtool: 'cheap-module-inline-source-map',

	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV),
			LANG:     JSON.stringify('ru')
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "common"
		})
	],
};
