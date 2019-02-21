var express    = require('express');
var Webtask    = require('webtask-tools');
var request = require('request');
var app = express();

app.get('*', function (req, res) {
  console.log(req.url.substring(1));
  var url = req.url.substring(1);
  req.pipe(request(url)).pipe(res);
});

module.exports = Webtask.fromExpress(app);
