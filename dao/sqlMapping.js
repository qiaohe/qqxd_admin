module.exports = {
    admin: {
        findProducts: 'select id, name,cash, coin from product',
        findByUserName: 'select * from admin where name=?',
        findRewards: 'select SQL_CALC_FOUND_ROWS * from reward limit ?,?',
        findMerchants: 'select SQL_CALC_FOUND_ROWS * from merchant limit ?,?',
        findPlayers: 'select SQL_CALC_FOUND_ROWS * from player limit ?,?',
        findSettings: 'select `key`, `value` from setting',
        updateSetting: 'update setting set `value`=? where `key`=?',
        updateMerchant: 'update merchant set ? where id = ?',
        updatePlayer: 'update player set ? where id = ?',
        findPlatformInfo:'select * from platform',
        findMerchantTransactionFlowsBy: 'select SQL_CALC_FOUND_ROWS * from merchantTransactionflow ',
        findPlayerTransactionFlowsBy: 'select SQL_CALC_FOUND_ROWS * from playerTransactionflow ',
        findPlatformTransactionFlowsBy: 'select SQL_CALC_FOUND_ROWS * from platformTransactionflow '
    }
}
