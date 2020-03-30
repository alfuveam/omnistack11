const crypto = require('crypto');

module.exports = function generateUniquiId(){
    return crypto.randomBytes(4).toString('HEX'); 
}