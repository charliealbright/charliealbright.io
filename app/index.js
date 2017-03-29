var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/fonts'));
app.use('/resume', express.static(__dirname + '/pdf/Charlie_Albright_Resume.pdf'));
app.use(favicon(path.join(__dirname, 'images', 'favicon.ico')));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
