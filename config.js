'use strict';

module.exports = {
    server: {
        name: 'qqxd admin app restful api',
        version: '0.0.1',
        host: '0.0.0.0',
        port: 3001
    },
    db: {
        host: '116.62.208.62',
        port: '3306',
        user: 'root',
        password: 'heqiao75518?',
        debug: false,
        multipleStatements: true,
        dateStrings: true,
        database: 'FabulousShop',
        charset: 'UTF8MB4_GENERAL_CI'
    },
    app: {
        locale: 'zh_CN',
        tokenSecret: '1~a',
        tokenExpire: 8640000,
        dateStrings: 'true',
        defaultHeadPic: 'http://7xrtp2.com2.z0.glb.qiniucdn.com/headPic.png',
        userAgreementUrl: 'http://7xrtp2.com2.z0.glb.qiniucdn.com/hisbusiness/user_protocol.html'
    },
    redis: {
        host: '127.0.0.1',
        port: 6379
    },
    qiniu: {
        ak: "uUGqn-e4Gyz2v2LaMIq1Dzes-YsGCh1_RaQ8_U2U",
        sk: "xab8g9SJK_M0dQGug2GLEXFo1rZ9jOZxqjFihWhV",
        prefix: "http://oqg0qx4pu.bkt.clouddn.com/"
    },
    deliverAddressUrl: 'https://jinshuju.net/f/iaIuNl',
    complaintUrl: 'https://jinshuju.net/f/h3GjNP'
};

