const logger = require('../log')

module.exports = function loadAllRoutes(app) {

    const userRoutes = require('./users.routes')
    app.use('/users', userRoutes)
    logger.debug("/users route loaded to app")
}