const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config');
const { title } = require('./slide-info');
const htmlTemplate = require('./html-template');

const app = express();
const compiler = webpack(config);
const serverPort = process.env.PORT || 3000;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.send(htmlTemplate({ title }));
});

app.listen(serverPort, 'localhost', function(err) {
  if (err) { throw err; }

  console.log('Listening at http://localhost:' + serverPort);
});
