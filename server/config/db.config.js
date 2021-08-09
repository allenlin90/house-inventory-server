require('dotenv').config();

// db params
const HOST = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const DB = process.env.DB_DATABASE;
const USER = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

module.exports = {
    HOST,
    USER,
    PASSWORD,
    DB,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};