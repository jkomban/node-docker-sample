const MongoClient = require('mongodb').MongoClient
const ConfigService= require('../config');

/* 
*
*
* TO DO
* Phase 1:
*   -> Make DB Connection to MongoDB
* Phase 2:
*   -> Make DB Connection to MariaDB
*
* Phase 3:
*   -> Make Mongo/Maria DB connection based on the configuration
*/
var _db ;

var ConnectDB = async function connect(url) {
     var connect = await MongoClient.connect(url);
     return _db = await connect.db(ConfigService.DB);
} 

var getDB = function(){
    return _db;
}

module.exports= {
    ConnectDB,
    getDB
}