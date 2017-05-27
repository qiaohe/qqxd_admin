module.exports = {
    admin: {
        findProducts: 'select id, name,cash, coin from product',
        findByUserName: 'select * from admin where name=?',
        findRewards: 'select * from reward limit ?,?',
        findMerchants: 'select * from merchant limit ?,?',
        findPlayers: 'select * from player limit ?,?',
        findSettings: 'select `key`, `value` from setting',
        updateSetting: 'update setting set `value`=? where `key`=?',
        updateMerchant: 'update merchant set ? where id = ?',
        updatePlayer: 'update player set ? where id = ?'
    }
}
