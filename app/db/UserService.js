const MongoUtil = require('./MongoUtil');
const ConfigService = require('../config')
const logger = require('../log')
const DESCENDING = -1;
/* This is to provide User service for all DB operations */

class UserService {
    constructor() {
        this.users = []
        this.db = MongoUtil.getDB();
        this.collection = this.db.collection(ConfigService.USER_COLLECTION)
        logger.debug("User DBService ready ")
    }
}

UserService.prototype.addUser = async function (user) {
    logger.debug("DB Service: addUser")
    // ADD an id field to maxmimum number
    var maxUser = await this.collection
        .find({ id: { $exists: true } })
        .sort({ id: DESCENDING })
        .limit(1)
        .toArray()

    var oneUser = (maxUser.length > 0) ? maxUser[0] : JSON.parse('{"id":0}')
    logger.debug("MaxUser ", oneUser)
    var maxId = (Number.isNaN(oneUser.id) || !Number.isInteger(oneUser.id)) ? 0 : oneUser.id
    logger.debug("Next Id ", ++maxId)
    user.id = maxId;
    return await this.collection.insert(user);
}

UserService.prototype.getAllUsers = async function () {
    logger.debug("DB Service: getAllUsers")
    var self = this
    return await self.collection.find({}).limit(10).toArray();
}

UserService.prototype.getUserWithId = async function (userId) {
    return await this.collection.findOne({ id: userId })
}

UserService.prototype.deleteUserWithId = async function (userid) {
    return await this.collection.remove({ id: userid }, { justone: true })
}
module.exports = UserService