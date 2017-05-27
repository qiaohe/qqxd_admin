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
        adminDAO.findRewards({
            from: req.query.from,
            size: req.query.size
        }).then(function (rewards) {
            rewards && rewards.length > 0 && rewards.forEach(function (r) {
                if (r.level == "一等奖" || r.level == "二等奖") r.deliverAddressUrl = config.deliverAddressUrl;
            });
            res.send({ret: 0, data: rewards});
        }).catch(function (err) {
            res.send({ret: 1, data: err.message});
        });
        return next();
    },
    getMerchants: function (req, res, next) {
        adminDAO.findMerchants({
            from: req.query.from,
            size: req.query.size
        }).then(function (merchants) {
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
        adminDAO.findPlayers({
            from: req.query.from,
            size: req.query.size
        }).then(function (players) {
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
    }
}