module.exports = {
    development: {
        dialect: 'postgres',
        host: 'localhost',
        port: 5433,
        username: 'postgres',
        password: 'root',
        database: 'test-task',
    },
    test: {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'roku',
        password: 'roku',
        database: 'test',
    },
    production: {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'roku',
        password: 'roku',
        database: 'prod',
    },
}