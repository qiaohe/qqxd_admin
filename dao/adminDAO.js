"use strict";
var db = require('../common/db');
var sqlMapping = require('./sqlMapping');
module.exports = {
    findProducts: function () {
        return db.query(sqlMapping.admin.findProducts);
    },
    findByUserName: function (name) {
        return db.query(sqlMapping.admin.findByUserName, name);
    },
    findRewards: function (page) {
        return db.query(sqlMapping.admin.findRewards, [+page.from, +page.size]);
    },
    findMerchants: function (page) {
        return db.query(sqlMapping.admin.findMerchants, [+page.from, +page.size]);
    },
    findPlayers: function (page) {
        return db.query(sqlMapping.admin.findPlayers, [+page.from, +page.size]);
    },
    findSettings: function (page) {
        return db.query(sqlMapping.admin.findSettings);
    },
    updateSetting: function (kv) {
        return db.query(sqlMapping.admin.updateSetting, [kv.value, kv.key]);
    },
    updateMerchant: function (merchant) {
        return db.query(sqlMapping.admin.updateMerchant, [merchant, merchant.id]);
    },
    updatePlayer: function (player) {
        return db.query(sqlMapping.admin.updatePlayer, [player, player.id]);
    }
}
