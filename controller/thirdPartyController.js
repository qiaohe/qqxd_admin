"use strict";
var qiniu = require('qiniu');
module.exports = {
    getQiniuToken: function (req, res, next) {
        qiniu.conf.ACCESS_KEY = 'uUGqn-e4Gyz2v2LaMIq1Dzes-YsGCh1_RaQ8_U2U';
        qiniu.conf.SECRET_KEY = 'xab8g9SJK_M0dQGug2GLEXFo1rZ9jOZxqjFihWhV';
        var bucket = 'qqxd';
        var putPolicy = new qiniu.rs.PutPolicy(bucket);
        putPolicy.expires = 3600;
        res.send({
            ret: 0, data: {
                token: putPolicy.token()
            }
        });
        return next();
    }
}