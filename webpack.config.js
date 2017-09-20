const path = require('path');

const config = {
	entry: path.resolve(__dirname, 'app/index.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/, 
			loaders: 'babel-loader',
			query: {
				presets: ['env', 'react']
			}
		}]
	}
}

module.exports = config;