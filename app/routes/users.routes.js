var router = require('express').Router();
const UserHandler = require('./users.handlers')

router.get('/', async (req, res) => {

    UserHandler.getUsers(req, res)

})

router.get('/:id', async (req, res) => {

    UserHandler.getUsersWithId(req, res)

});

router.post('/', async (req, res) => {

    UserHandler.createUser(req, res)

})


module.exports = router