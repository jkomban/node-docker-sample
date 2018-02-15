'use strict'
const express = require('express');
const parser = require('body-parser');
const util = require('./utils')
const DBService = require('./db');
const ConfigService = require('./config');
const app = new express();
const logger = require('./log')


app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
// var oneApp;
// test
// async IIFE
async function startAPP() {

    try {
        await DBService.ConnectDB(ConfigService.DB_URL)
        logger.debug("DB has been brought up")
        var OS = await util.getOSDetails()
        require('./routes')(app)
        var result = await app.listen(ConfigService.PORT);
        logger.debug(`Application running in port http://${OS.hostname}:${ConfigService.PORT}`)
        return result;
    } catch (error) {
        logger.error("Error in bringing Up the application", error)

    }

}

// module.exports = function start(cb){
//     startAPP();
// }
startAPP();

module.exports = app