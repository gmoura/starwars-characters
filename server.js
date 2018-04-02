const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const app = express();
const compiler = webpack(config);
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, 'localhost', function (err) {
	if (err) {
		return console.error(err);
	}
	console.log(`\nListening at http://localhost:${port}`);
});


