"use strict";
var config = require('../config');
var _ = require('lodash');
var Promise = require('bluebird');
var adminDAO = require('../dao/adminDAO');

module.exports = {
    getProducts: function (req, res, next) {
        adminDAO.findProducts().then(function (products) {
            res.send({ret: 0, data: products});
        }).catch(function (err) {
            res.send({ret: 1, data: err.message});
        });
        return next();
    },

    getRewards: function (req, res, next) {
        var pageIndex = +req.query.pageIndex;
        var pageSize = +req.query.pageSize;
        adminDAO.findRewards({
            from: (pageIndex - 1) * pageSize,
            size: pageSize
        }).then(function (rewards) {
            rewards && rewards.length > 0 && rewards.forEach(function (r) {
                if (r.level == "一等奖" || r.level == "二等奖") r.deliverAddressUrl = config.deliverAddressUrl;
            });
            rewards.pageIndex = pageIndex;
            res.send({ret: 0, data: rewards});
        }).catch(function (err) {
            res.send({ret: 1, data: err.message});
        });
        return next();
    },
    getMerchants: function (req, res, next) {
        var pageIndex = +req.query.pageIndex;
        var pageSize = +req.query.pageSize;
        adminDAO.findMerchants({
            from: (pageIndex - 1) * pageSize,
            size: pageSize
        }).then(function (merchants) {
            merchants.pageIndex = pageIndex;
            res.send({ret: 0, data: merchants});
        }).catch(function (err) {
            res.send({ret: 1, data: err.message});
        });
        return next();
    },

    updatePlayer: function (req, res, next) {
        adminDAO.updatePlayer(req.body).then(function (result) {
            res.send({ret: 0, message: '更新成功。'})
        }).catch(function (err) {
            res.send({ret: 1, data: err.message});
        });
        return next();
    },

    updateMerchant: function (req, res, next) {
        adminDAO.updateMerchant(req.body).then(function (result) {
            res.send({ret: 0, message: '更新成功。'})
        }).catch(function (err) {
            res.send({ret: 1, data: err.message});
        });
        return next();
    },
    getPlayers: function (req, res, next) {
        var pageIndex = +req.query.pageIndex;
        var pageSize = +req.query.pageSize;
        adminDAO.findPlayers({
            from: (pageIndex - 1) * pageSize,
            size: pageSize
        }).then(function (players) {
            players.pageIndex = pageIndex;
            res.send({ret: 0, data: players});
        }).catch(function (err) {
            res.send({ret: 1, data: err.message});
        });
        return next();
    },
    getSettings: function (req, res, next) {
        var data = {};
        adminDAO.findSettings().then(function (settings) {
            settings.length > 0 && settings.forEach(function (item) {
                data[item.key] = item.value;
            });
            res.send({ret: 0, data: data});
        }).catch(function (err) {
            res.send({ret: 1, data: err.message});
        });
        return next();
    },
    changeSettings: function (req, res, next) {
        var data = req.body;
        Promise.map(_.pairs(data), function (o) {
            return adminDAO.updateSetting({key: o[0], value: o[1]});
        }).then(function (result) {
            res.send({ret: 0, message: '更新成功'});
        }).catch(function (err) {
            res.send({ret: 1, data: err.message});
        });
        return next();
    },
    getMerchantFlows: function (req, res, next) {
        var conditions = [];
        if (req.query.type) conditions.push('type=' + req.query.type);
        if (req.query.nickname) conditions.push('nickname like \'%' + req.query.nickname + '%\'');
        if (req.query.uniqueCode) conditions.push('uniqueCode like \'%' + req.query.uniqueCode + '%\'');
        var pageIndex = +req.query.pageIndex;
        var pageSize = +req.query.pageSize;
        adminDAO.findMerchantTransactionFlowsBy({
            from: (pageIndex - 1) * pageSize,
            size: pageSize
        }, conditions).then(function (flows) {
            flows.pageIndex = pageIndex;
            res.send({ret: 0, data: flows});
        }).catch(function (err) {
            res.send({ret: 1, data: err.message});
        });
        return next();
    },
    getPlayerFlows: function (req, res, next) {
        var conditions = [];
        var pageIndex = +req.query.pageIndex;
        var pageSize = +req.query.pageSize;
        if (req.query.type) conditions.push('type=' + req.query.type);
        if (req.query.nickname) conditions.push('nickname like \'%' + req.query.nickname + '%\'');
        adminDAO.findPlayerTransactionFlowsBy({
            from: (pageIndex - 1) * pageSize,
            size: pageSize
        }, conditions).then(function (flows) {
            flows.pageIndex = pageIndex;
            res.send({ret: 0, data: flows});
        }).catch(function (err) {
            res.send({ret: 1, data: err.message});
        });
        return next();
    },
    getPlatformFlows: function (req, res, next) {
        var conditions = [];
        var pageIndex = +req.query.pageIndex;
        var pageSize = +req.query.pageSize;
        if (req.query.type) conditions.push('type=' + req.query.type);
        if (req.query.nickname) conditions.push('nickname like \'%' + req.query.nickname + '%\'');
        var data = {};
        adminDAO.findPlatformInfo().then(function (result) {
            data.balance = result[0].balance;
            return adminDAO.findPlatformTransactionFlowsBy({
                from: (pageIndex - 1) * pageSize,
                size: pageSize
            }, conditions)
        }).then(function (flows) {
            flows.pageIndex = pageIndex;
            data.data = flows;
            res.send({ret: 0, data: data});
        }).catch(function (err) {
            res.send({ret: 1, data: err.message});
        });
        return next();
    }
}