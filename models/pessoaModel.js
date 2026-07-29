const pool = require('../db');

async function listar() {
    const result = await pool.query('SELECT * FROM clientes ORDER BY id');
    return result.rows;
}

module.exports = {
    listar
};