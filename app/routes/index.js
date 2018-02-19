module.exports = function loadAllRoutes(app) {

    const userRoutes = require('./users.routes')
    app.use('/users', userRoutes)
    console.log("/users route loaded to app")
}