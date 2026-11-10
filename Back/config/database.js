const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'aula_andrea',
    'postgres',
    'postgres',
    {
        host: 'localhost',
        dialect: 'postgres',
        logging: false
    }
);

module.exports = sequelize;