var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.dev');

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true
}).listen(3000, 'localHost', function (err, result) {
	if (err) {
		return console.info('err', err);
	}
	console.info('Listening on port 3000');
});