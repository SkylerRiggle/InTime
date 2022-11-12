const dbConfig = {
    name: process.env.DB ? process.env.DB : "intime",
    user: process.env.USER ? process.env.USER : "postgres",
    pass: process.env.PASSWORD ? process.env.PASSWORD : "riggle2021",
    host: process.env.HOST ? process.env.HOST : "localhost",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
}

export default dbConfig;