// const DB_URL = process.env.DB_URL
const DB = "myexpense"
const USER_COLLECTION = "users"
const PORT = process.env.APP_PORT;
const LOG_TO_FIE_OR_CONSOLE = process.env.LOG_TO;

module.exports = {

    "DB_URL": process.env.DB_URL,
    "DB": DB,
    "USER_COLLECTION": USER_COLLECTION,
    "PORT": PORT,
    "LOG_TO_FIE_OR_CONSOLE": LOG_TO_FIE_OR_CONSOLE

}