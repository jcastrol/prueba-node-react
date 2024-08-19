const crypto = require('crypto'); 

const generateRandomToken =async()=>{
    return await crypto.randomBytes(64).toString('hex');
}

module.exports = {
    generateRandomToken
}