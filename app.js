var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));//����ģ���ļ���
app.set('view engine', 'ejs');//����ģ������Ϊejs
/*�����������ã�
basepath �������ƣ�ͨ������res.redirect()��ת
port ָ���˿�
view options ȫ����ͼ��������
view cache ������ͼ����
case sensitive routes ·��url���ִ�Сд
strict routing �ϸ�·�����ͻ��˷���url�ǲ��ܺ���ĩβ��/,������ʲ���
jsonp callback ����͸��jsonp֧��*/

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev')); //��־
app.use(bodyParser.json());//���ڽ����ͻ��������������ǾͿ���ͨ��req.body.title��ȡ��������
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);//����·�ɵ�֧��
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler//����ģʽ
// will print stacktrace
if (app.get('env') === 'development') {//��Ӧ��Ϊ������ģʽ��ʱ������׽���ȡ�Ĵ���
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
app.use(function(err, req, res, next) {//��Ӧ��Ϊ�ǡ�����ģʽ��ʱ������׽���ȡ�Ĵ���
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
