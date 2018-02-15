const winston = require('winston')
const Config = require('../config')

var transport;

if(Config.LOG_TO_FIE_OR_CONSOLE === "CONSOLE"){
    transport = new (winston.transports.Console)()
}
else {
    transport = new (winston.transports.File)({
        filename: 'node-docker.log'
    })
}

var logger = new (winston.Logger)({
    level: 'debug',
    transports: [transport]

});

// logger.info = function(){
//     console.log(`Info is here ${JSON.stringify([...arguments])}`)
// }
// logger.error = function(){
//     console.log(`Error is here ${JSON.stringify([...arguments])}`)
// }
// console.log(logger.level)
module.exports = logger