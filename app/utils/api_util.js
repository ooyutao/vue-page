var express = require('express');
var router = express.Router();
var service = require('./url_util.js')("api"); //后台接口地址
var httpUtil = require("./http_util.js");

//接口实例
router.get('/*', function (req, res) {
    httpUtil.sendRemoteRequest(req, {data: req.query, url: service + req.url, method:"get"}, function (err, result, response) {
        res.send(result);
    });
});
router.post('/*', function (req, res) {
    httpUtil.sendRemoteRequest(req, {data: req.body, url: service + req.url, method:"post"}, function (err, result, response) {
        res.send(result);
    });
});

module.exports = router;