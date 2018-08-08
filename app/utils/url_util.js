var apiConfig = require('./api_config');//请求接口域名
var server = '';
try {
    server = require('../../../server').server
} catch (e) {
    server = "domain"
}

var HttpUrl = function (key) {
    return apiConfig[key][server];
};
module.exports = HttpUrl;
