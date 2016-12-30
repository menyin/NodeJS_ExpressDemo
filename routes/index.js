var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express'});
});
router.get(/index.*/gi, function(req, res, next) {//测试url的正则匹配
  res.render('index', { title: 'Express'});
});
//router.get('/testLayout', function(req, res, next) {
//  res.render('testLayout', { title: 'Express',layout:'layout'});
//});
//router.get('/testLayout2', function(req, res, next) {
//  res.render('testLayout', { title: 'Express',layout:'layout2'});
//});
module.exports = router;
