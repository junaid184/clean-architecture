

module.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'clean_node_architecture',
            port: 3306
        },
        migrations: {
            directory: __dirname + '/db/pg/migrations'
        },
        seeds: {
            directory: __dirname + '/db/pg/seeds/development'
        }
    },
};