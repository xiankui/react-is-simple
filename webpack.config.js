const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
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
	},

	plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new UglifyJsPlugin({
      beautify: false,
      // mangle: {
      //   screw_ie8: true,
      //   keep_fnames: true
      // },
      // compress: {
      //   screw_ie8: true
      // },
      comments: false
    }),

    // for use react-devtools in chrome
    new webpack.DefinePlugin({
      "process.env": { 
         NODE_ENV: JSON.stringify("production") 
       }
    })
  ]
}

module.exports = config;