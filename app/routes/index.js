module.exports = function loadAllRoutes(app){

    const userRoutes = require('./users')
    app.use('/users',userRoutes)
    console.log("/users route loaded to app")
}