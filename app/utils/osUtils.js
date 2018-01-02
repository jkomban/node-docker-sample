const os = require('os');
const logger = require('../log')

var getOSDetails=async function(){
    logger.debug("getOSDetails function executed")
    var result = {};
    result.cpus = os.cpus().length;
    result.hostname = os.hostname();
    result.platform = os.platform();
    result.osType = os.type();
    result.user = os.userInfo();
    return result
}

module.exports = getOSDetails