const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/js/app.js'
  ],
  devtool: 'eval-source-map',
  output: {
    path:  path.join(__dirname, './public/js'),
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  module: {
    loaders: [
  	  {
        test :/\.js$/,
		    loader: ['babel-loader'],
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        }
      },
      { test: /\.styl$/, loader: 'style-loader!css-loader!stylus-loader' }
    ]
  }
};


