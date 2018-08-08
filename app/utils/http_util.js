/**
 * http utility
 */
var merge = require('merge');
var request = require('request');

var HttpUtil = {
    sendRemoteRequest: function (req, options, callback) {
        try {
            var opts = {};
            options.contentType = options.contentType || 'application/json;charset=utf-8';
            opts.method = options.method || 'post';
            opts.headers = {
                "Content-Type": options.contentType,
                "cookie": req.headers["cookie"],
                "User-Agent": req.headers["user-agent"],
                "X-Requested-With": "XMLHttpRequest"
            };
            opts.url = options.url;

            opts.body =JSON.stringify(options.data);

            request(opts, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var responseData = JSON.parse(body);

                    callback.call(callback, null, responseData, response);
                    return true;
                } else {
                    callback.call(callback, error, {stateCode: 500, retMessage: "服务器繁忙，请稍后再试！"}, response);
                    return false;
                }
            });
        } catch (e) {
            callback.call(callback, error, {stateCode: 500, retMessage: "服务器繁忙，请稍后再试"}, null);
            return false;
        }
    }
};
exports = module.exports = HttpUtil;
