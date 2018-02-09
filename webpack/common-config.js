
/**
 * Copyright - Nirlendu Saha
 */

const Webpack = require('webpack');
const HappyPack = require('happypack');
const path = require('path');
const CommonsPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ManifestPlugin = require('webpack-manifest-plugin');

process.noDeprecation = true;

module.exports = {
	entry: {
		'index': path.resolve('app/pages/index/client.js')
	},
	output: {
		path: path.resolve('../assets/static/js'),
		filename: '[name].[chunkhash].js',
	},
	plugins: [
		new Webpack.NoEmitOnErrorsPlugin(),
		new Webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
		new HappyPack({
			cache: true,
			loaders: [{
				loader: 'babel-loader',
				options: {
						presets: ['es2015', 'react']
					}
				}],
			threads: 4
		}),
		new CommonsPlugin({
			minChunks: 3,
			name: "common"
		}),
		new ManifestPlugin({
			fileName : '../../../react-app/manifest.json'
		})
	],
	target: 'web',
	module: {
		loaders: [
			{
				test: /.js?$/,
				loader: 'happypack/loader',
				query: {
					presets: ['es2015', 'react']
				},
				exclude: [/node_modules/],
			},
			{
				test: /\.js$/,
				exclude: /node_modules\/(?!(stardust))/,
				loader: 'babel-loader',
				query: {
					cacheDirectory: true,
					plugins: [
						'transform-runtime',
						'add-module-exports',
						'transform-decorators-legacy',
					],
					presets: ['es2015', 'react', 'stage-1'],
				},
		    },
			{
				test: /\.jsx?$/,
					loader: 'babel-loader',
					query: {
						presets: ['react'],
				},
				exclude: [/node_modules/],
			},
			{test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
			{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
			{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
			{ 
				test: /\.json$/, 
				loader: 'json-loader' 
			},
		    {
		        test: /\.css$/,
		        use: [ 'style-loader', 'css-loader' ]
		    }
		],
	},
	resolve: {
		extensions: ['.Webpack.js', '.web.js', '.js', '.jsx'],
		modules: ['node_modules', path.resolve(__dirname, 'app')],
	},
	node: {
		console: true,
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
	},
};
