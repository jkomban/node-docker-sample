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

// async IIFE
async function startAPP() {

    try {
        await DBService.ConnectDB(ConfigService.DB_URL)
        logger.debug("DB has been brought up")
        var OS = await util.getOSDetails()
        require('./routes')(app)
        await app.listen(ConfigService.PORT);
        logger.debug(`Application running in port http://${OS.hostname}:${ConfigService.PORT}`)

        return app;
    } catch (error) {
        logger.error("Error in bringing Up the application", error)

    }

}

module.exports = startAPP()
