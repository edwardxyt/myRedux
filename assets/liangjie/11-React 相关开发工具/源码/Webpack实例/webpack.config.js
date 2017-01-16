var webpack = require('webpack')

module.exports = {
	entry: {
		app: './app.jsx',
		app2: './app2.jsx'
	},
	output: {
		path: './',
		filename: '[name].js',
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin("common.js")
	],
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'jsx-loader',
			}
		]
	}
}