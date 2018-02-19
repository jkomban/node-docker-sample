const DB_URL = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@jpkcluster-shard-00-00-kzn26.mongodb.net:27017,jpkcluster-shard-00-01-kzn26.mongodb.net:27017,jpkcluster-shard-00-02-kzn26.mongodb.net:27017/test?ssl=true&replicaSet=jpkcluster-shard-0&authSource=admin`;
const DB = "myexpense"
const USER_COLLECTION = "users"
const PORT = process.env.APP_PORT;
const LOG_TO_FIE_OR_CONSOLE = "CONSOLE";

module.exports = {

    "DB_URL": DB_URL,
    "DB": DB,
    "USER_COLLECTION": USER_COLLECTION,
    "PORT": PORT,
    "LOG_TO_FIE_OR_CONSOLE": LOG_TO_FIE_OR_CONSOLE



}