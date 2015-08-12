var express = require('express');
var fs = require('fs');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

var app = express();
var port = process.env.PORT || 5000;
var routes = require('./server/routes/index');

app.set('view engine', 'html');
app.engine('html', function(path, options, callback) {
    fs.readFile(path, 'utf-8', callback);
});
app.use(morgan('dev'));
app.use(favicon(__dirname + '/client/assets/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client'));
app.use('/', routes);
app.use(function(err, req, res, next) { res.status(err.status || 500); });
app.listen(port, function() { console.log("running at localhost:" + port); });

module.exports = app;
