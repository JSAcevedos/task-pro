process.loadEnvFile()

const config = {
    appPort: process.env.APP_PORT,
    dbUrl: process.env.MONGO_DB_URL
}

module.exports = config