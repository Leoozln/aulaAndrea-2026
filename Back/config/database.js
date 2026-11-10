const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'aula_andrea',
    'postgres',
    'postgres',
    {
        host: 'localhost',
        port: 6543,
        dialect: 'postgres',
        logging: false
    }
);

module.exports = sequelize;