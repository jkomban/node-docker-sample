const UserService = require('./UserService')
const MongoUtil = require('./MongoUtil')

module.exports={
    UserService,
    ConnectDB: MongoUtil.ConnectDB,
    getDB: MongoUtil.getDB
}