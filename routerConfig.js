var authController = require('./controller/authController');
var thirdPartyController = require('./controller/thirdPartyController');
var adminController = require('./controller/adminController');
module.exports = [
    {
        method: "post",
        path: "/api/login",
        handler: authController.login
    },
    {
        method: "post",
        path: "/api/logout",
        handler: authController.logout,
        secured: 'user'
    },
    {
        method: 'get',
        path: '/api/qiniu/token',
        handler: thirdPartyController.getQiniuToken
    },
    {
        method: "get",
        path: "/api/products",
        handler: adminController.getProducts,
        secured: 'user'
    },
    {
        method: "get",
        path: "/api/rewards",
        handler: adminController.getRewards
    },
    {
        method: "get",
        path: "/api/merchants",
        handler: adminController.getMerchants
    },
    {
        method: "put",
        path: "/api/merchants",
        handler: adminController.updateMerchant
    },

    {
        method: "get",
        path: "/api/players",
        handler: adminController.getPlayers
    },
    {
        method: "put",
        path: "/api/players",
        handler: adminController.updatePlayer
    },
    {
        method: "get",
        path: "/api/settings",
        handler: adminController.getSettings
    },
    {
        method: "put",
        path: "/api/settings",
        handler: adminController.changeSettings
    }
];
