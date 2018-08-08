var express = require('express');
var path = require('path');
var router = express.Router();
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var userAgent = require("mobile-agent");
var crypto = require('crypto');
var merge = require('merge');

//var params = require('express-params');
var partials = require('express-partials');

//后台路由
var routes = require('./routes');

var app = express();


// session
var session = require('express-session');
app.use(session({
    secret: 'label',
    //store: store,
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 86400000}
}));

app.use(bodyParser.json({limit: '2000mb'}));
app.use(bodyParser.urlencoded({limit: '2000mb', extended: true}));


app.set("env", "production");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
//use view compile cache
app.enable("view cache");
app.use(partials());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../dist')));

var fs = require('fs');

var http = require("http");
var server = http.createServer(app);

var domainMiddleware = require("domain-middleware");
app.use(domainMiddleware({
    server: server,
    killTimeout: 10000
}));

app.HttpServer = server;


app.use('/', routes);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        var view = "index/error";
        if (req.Mobile) {
            view = "index/error"
        }
        res.render(view, {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    if (/\/api/gi.test(req.originalUrl)) {
        res.send({error_code: 500, error_message: "Node服务器繁忙，请稍后再试"});
        return false;
    }
    var view = "index/error";
    if (req.Mobile) {
        view = "index/error"
    }
    res.render(view, {
        message: err.message,
        error: {}
    });
});
//server.listen(8085);
/*app.set('port', process.env.PORT || 8082);
 app.listen(app.get('port'));*/

module.exports = app;
