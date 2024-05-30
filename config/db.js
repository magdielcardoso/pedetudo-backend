const pgp = require('pg-promise')()
require('dotenv').config()
const configDb = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    ssl: {
        rejectUnauthorized: false // Ignora a validação de certificado (apenas para dev/teste)
    }
};

const db = pgp(configDb)

module.exports = db