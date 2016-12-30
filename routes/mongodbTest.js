/**
 * Created by CNY on 2016/11/23.
 */
var express = require('express');
var router = express.Router();
var mongodb=require("./db");
router.get('/', function(req, res, next) {
    mongodb.open(function(err,db){
        if(err){
            return callback(err);
        }
        console.log('mongo连接成功');
        db.collection("user",function(err,collection){
            if(err){
                mongodb.close();
               console.log('查询user表出错')
            }
            //查找name属性为usename的文档
            collection.findOne({name:'user0'},function(err,doc){
                mongodb.close();
                if(doc){
                    //封装文档为User对象
                    console.log('查询user表成功')
                    res.render('mongodbTest', { data: doc});

                }else{
                    console.log('查询user表内容为空');
                }
            })
        })
    })
    //res.render('mongodbTest', { data: 'mongodb测试'});
});
module.exports = router;