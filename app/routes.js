var express = require('express');
var router = express.Router();
/* 接口 */
router.use('/api', require('./utils/api_util'));                     //京东稻田  AJAX接口转换

router.get("/favicon.ico", function (req, res) {
    res.redirect('./favicon.ico');
});
module.exports = router;
