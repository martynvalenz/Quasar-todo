require('dotenv').config({path:'../.env'})

module.exports = {
    development:{
        client:'mysql',
        connection:{
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            charset: process.env.DB_CHARSET
        },
        migrations:{
            directory:'./db/migrations',
            tableName:'knex_migrations'
        },
        seeds:{
            directory:'./db/seeds'
        }
    }
}