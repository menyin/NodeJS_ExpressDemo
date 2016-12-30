var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var partials = require('express-partials');//添加布局母版功能

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));//设置模板文件夹
app.set('view engine', 'ejs');//设置模板引擎为ejs
app.use(partials());//添加布局母版功能

/*还有其他设置：
basepath 基础机制，通常用于res.redirect()跳转
port 指定端口
view options 全局视图参数对象
view cache 启用视图缓存
case sensitive routes 路径url区分大小写
strict routing 严格路径，客户端访问url是不能忽略末尾的/,否则访问不到
jsonp callback 开启透明jsonp支持*/

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev')); //日志
app.use(bodyParser.json());//用于解析客户端请求，这样我们就可以通过req.body.title获取请求数据
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());//用于cookie解析
app.use(express.static(path.join(__dirname, 'public')));//用于设置静态资源路由

app.use('/', routes);//用于路由的支持
app.use('/users', users);
var mongodbtest= require('./routes/mongodbTest');
app.use('/mongodbtest', mongodbtest);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler//开发模式
// will print stacktrace
if (app.get('env') === 'development') {//当应用为“开发模式”时，错误捕捉后采取的处理
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {//当应用为非“开发模式”时，错误捕捉后采取的处理
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
