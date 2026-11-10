const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'aula_andrea',
  password: 'postgres',
  port: 6543,
});

module.exports = pool;