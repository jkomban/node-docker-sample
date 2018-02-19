const UserService = require('../db').UserService;
const User = new UserService();
const logger = require('../log')


module.exports.getUsers = async (req, res) => {

    try {
        logger.debug("Request received to get first x users")
        var results = await User.getAllUsers();
        var responseStatus = results.length > 0 ? 200 : 204
        res.status(responseStatus).send(results);
    } catch (Error) {
        logger.error(`Error in getting users: ${Error}`)
        res.status(409).send({ error: 'Could not get users list' })
    }

}

module.exports.getUsersWithId = async (req, res) => {
    try {
        var id = parseInt(req.params.id)
        logger.debug(`Request received in for user ${id}`)
        const result = await User.getUserWithId(id);
        var responseStatus = result === null ? 204 : 200
        logger.debug(`Request received in for user ${JSON.stringify(result)} `)
        res.status(responseStatus).send(result)
    } catch (Error) {
        logger.error(`Error in getting user: ${Error}`)
        res.status(409).send({ error: 'Could not get user' })
    }

    /* Don't forget the Promise way to the same =|:)
     User.getUserWithId(id)
         .then(
             (userRetrieved)=>{
             console.log(`Retrieved user ${userRetrieved} for ${id} `)
                var responseStatus = userRetrieved===null ? 204 : 200
                res.status(responseStatus).send(userRetrieved)
            }
        ).catch(
            (reason)=>{
                console.log(`Error retrieving user for ${id}`,reason)
                res.status(409).send({error:'Could not find any user'})
            }
        )
    */
}

module.exports.createUser = async (req, res) => {
    try {
        const userbody = req.body
        var result = await User.addUser(userbody)
        var responseStatus = (result.insertedCount !== 0) ? 200 : 210
        // var responseStatus = (result.insertedCount !== 0) ? 200 : new Error('Couldnt insert any record')
        res.status(responseStatus).send({ body: 'Added user to the system' })
    } catch (Error) {
        logger.debug("Could NOT add user", Error)
        res.status(409).send({ error: reason })
    }
}