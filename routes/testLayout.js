var express = require('express');
var router = express.Router();
    /* GET home page. */
/*此部分测试没有效果，因为这个路由控制没有做，此部分逻辑代码移到index.js中测试*/
router.get('/testLayout', function(req, res, next) {
    res.render('testLayout', { title: '测试layout' });
});

//module.exports = router;
