/**
 * Created by yutao6 on 2018/8/8.
 */
var utils = {};
//success:成功, warning:警告, info:消息, error:错误
utils.alert = function(_this,text,type){
    var obj = {
        title: '提示',
        message: text
    };
    if(type){
        obj.type = type;
    }
    _this.$message(obj);
};
utils.Alert = function(_this,text,type,duration){
    var obj = {
        title: '提示',
        message: text
    };
    if(type){
        obj.type = type;
    }
    if(duration){
        obj.duration = duration;
    }
    _this.$notify(obj);
};
utils.ajax = function(_this,url,data,type,callback,asyncType){
    var isType = "post",async = true;
    if (typeof type == "function") {
        callback = type;
    }else{
        isType = type;
    }
    if(asyncType == false){
        async = false;
    }
    $.ajax({
        type: isType,
        url: url,
        data: data,
        async:async,
        success: function (res) {
            if(res.error=='NotLogin'){
                $.getJSON("//sso.jd.com/exit?t=" + new Date() + "&callback=?", function () {
                    $.getJSON("//sso.jdpay.com/exit?t=" + new Date() + "&callback=?", function () {
                        // var url = encodeURIComponent("http://" + location.host + "/");
                        location.href = "https://passport.jd.com/new/login.aspx?ReturnUrl=" + encodeURIComponent(location);

                    });
                });
                return false;
            }
            if (typeof callback == "function") {
                callback(res);
            } else {
                utils.alert(_this,res.retMessage,"warning");
            }
        },
        error: function () {
            utils.alert(_this,"网络请求失败！","error");
        }
    });
};

export default utils;