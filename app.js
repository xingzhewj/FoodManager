/**
 * Module dependencies.
 * v1.0.11
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var ejs = require('ejs');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('.html', ejs.__express);
app.set('view engine', 'ejs'); // app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

//映射请求
app.get("/login",routes.login);
app.get("/main",routes.main);
app.get("/people",routes.people);
app.get("/menus",routes.menus);
app.get("/statischart",routes.statischart);
app.get("/peopleinfo",routes.peopleinfo);
app.get("/recharge",routes.recharge);
app.get("/regedit",routes.regedit);

app.get("/note",routes.node);
app.get("/note/write",routes.writenote);
app.get("/note/view",routes.viewnote);

app.get("/blog",routes.blog);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});