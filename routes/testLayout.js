var express = require('express');
var router = express.Router();
    /* GET home page. */
/*�˲��ֲ���û��Ч������Ϊ���·�ɿ���û�������˲����߼������Ƶ�index.js�в���*/
router.get('/testLayout', function(req, res, next) {
    res.render('testLayout', { title: '����layout' });
});

//module.exports = router;
